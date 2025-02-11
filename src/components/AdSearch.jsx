// src/components/AdSearch.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import config from '../config';

const AdSearch = () => {
    const [brandName, setBrandName] = useState('');
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const searchAds = async (brandName) => {
        const accessToken = localStorage.getItem('meta_access_token');
        if (!accessToken) {
            navigate('/login');
            return;
        }

        const url = new URL(`https://graph.facebook.com/${config.apiVersion}/ads_archive`);
        const params = {
            access_token: accessToken,
            search_terms: brandName,
            ad_type: 'POLITICAL_AND_ISSUE_ADS',
            ad_reached_countries: '["US"]',
            fields: [
                'id',
                'ad_creation_time',
                'ad_creative_body',
                'ad_creative_link_caption',
                'ad_creative_link_title',
                'ad_creative_link_description',
                'ad_snapshot_url',
                'page_name',
                'currency',
                'funding_entity',
                'impression_results',
                'spend'
            ].join(','),
            limit: 100
        };

        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });

        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await searchAds(brandName);
            setAds(result.data || []);
        } catch (err) {
            setError(err.message);
            if (err.message.includes('401')) {
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async () => {
        try {
            setDownloadProgress(0);
            const zip = new JSZip();
            
            // Create a JSON file with all ads data
            zip.file('ads_data.json', JSON.stringify(ads, null, 2));
            
            // Create a CSV file with key information
            const csvHeader = 'ID,Page Name,Creation Time,Funding Entity,Spend,Ad Creative Body\n';
            const csvRows = ads.map(ad => {
                return [
                    ad.id,
                    (ad.page_name || '').replace(/,/g, ';'),
                    ad.ad_creation_time,
                    (ad.funding_entity || '').replace(/,/g, ';'),
                    ad.spend,
                    (ad.ad_creative_body || '').replace(/,/g, ';').replace(/\n/g, ' ')
                ].join(',');
            }).join('\n');
            
            zip.file('ads_summary.csv', csvHeader + csvRows);

            // Generate README
            const readme = `Meta Ads Library Export
Generated: ${new Date().toISOString()}
Brand Search: ${brandName}
Total Ads: ${ads.length}

Files included:
- ads_data.json: Complete dataset in JSON format
- ads_summary.csv: Simplified dataset in CSV format
`;
            zip.file('README.txt', readme);

            // Generate the zip file
            const content = await zip.generateAsync({
                type: 'blob',
                compression: 'DEFLATE',
                compressionOptions: {
                    level: 9
                }
            });

            // Create download link
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = `meta-ads-${brandName}-${new Date().toISOString().split('T')[0]}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            setDownloadProgress(null);
        } catch (err) {
            setError('Error downloading ads: ' + err.message);
            setDownloadProgress(null);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Meta Ads Explorer</h1>
                <p className="text-gray-600">Search and analyze public ads data from Meta's Ad Library</p>
            </div>

            <form onSubmit={handleSearch} className="mb-6">
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Enter brand name"
                        className="flex-1 p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                        <button
                            type="button"
                            disabled={loading || ads.length === 0}
                            onClick={handleDownload}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                        >
                            {downloadProgress !== null ? `Downloading...` : 'Download All'}
                        </button>
                    </div>
                </div>
            </form>

            {error && (
                <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
                    Error: {error}
                </div>
            )}

            <div className="grid gap-4">
                {ads.map((ad) => (
                    <div key={ad.id} className="p-4 bg-white rounded-lg shadow">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-semibold">{ad.page_name}</h2>
                            <span className="text-sm text-gray-500">
                                {new Date(ad.ad_creation_time).toLocaleDateString()}
                            </span>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{ad.ad_creative_body}</p>
                        
                        {ad.ad_creative_link_title && (
                            <div className="mb-4 p-3 bg-gray-50 rounded">
                                <h3 className="font-medium mb-1">{ad.ad_creative_link_title}</h3>
                                <p className="text-sm text-gray-600">
                                    {ad.ad_creative_link_description}
                                </p>
                            </div>
                        )}
                        
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <div>
                                <p>Spend: {ad.spend}</p>
                                <p>Funding: {ad.funding_entity}</p>
                            </div>
                            {ad.ad_snapshot_url && (
                                <a
                                    href={ad.ad_snapshot_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    View Ad
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
         <footer className="mt-8 py-4 border-t">
            <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-gray-900">Terms of Service</Link>
            </div>
        </footer>
        </div>
    );
};

export default AdSearch;