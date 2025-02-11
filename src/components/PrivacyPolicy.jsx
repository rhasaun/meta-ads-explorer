import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <nav className="mb-8">
                <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
            </nav>
            <div class="container">
        <h1>Meta Ads Explorer Privacy Policy</h1>
        <p class="last-updated">Last Updated: February 11, 2025</p>

        <div class="section">
            <h2>Introduction</h2>
            <p>Welcome to Meta Ads Explorer. This Privacy Policy explains how we collect, use, and protect information when you use our ad exploration tool. We are committed to ensuring the privacy and security of all users while providing transparency about our data practices.</p>
        </div>

        <div class="section">
            <h2>Information We Collect</h2>
            
            <h3>1. Public Advertisement Data</h3>
            <ul>
                <li>We collect and display publicly available advertisement data from Meta's platforms (Facebook and Instagram)</li>
                <li>This includes ad creatives, copy, posting dates, and engagement metrics that are publicly accessible</li>
                <li>All collected data is sourced through Meta's official APIs and public databases</li>
            </ul>

            <h3>2. User Activity Data</h3>
            <p>We collect the following information about how you use our service:</p>
            <ul>
                <li>Search queries and filtering preferences</li>
                <li>Session duration and usage patterns</li>
                <li>Browser type and device information</li>
                <li>IP address and general location data</li>
            </ul>

            <h3>3. Account Information (If Applicable)</h3>
            <p>If you choose to create an account, we may collect:</p>
            <ul>
                <li>Email address</li>
                <li>Username</li>
                <li>Password (encrypted)</li>
                <li>User preferences and saved searches</li>
            </ul>
        </div>

        <div class="section">
            <h2>How We Use Your Information</h2>

            <h3>1. Core Service Functionality</h3>
            <ul>
                <li>To display and organize advertisement data</li>
                <li>To provide search and filtering capabilities</li>
                <li>To maintain and improve our service</li>
            </ul>

            <h3>2. Analytics and Improvement</h3>
            <ul>
                <li>To analyze usage patterns and trends</li>
                <li>To improve user experience</li>
                <li>To identify and fix technical issues</li>
                <li>To develop new features based on user behavior</li>
            </ul>

            <h3>3. Communication</h3>
            <ul>
                <li>To send essential service updates</li>
                <li>To respond to user inquiries and support requests</li>
                <li>To send optional marketing communications (with consent)</li>
            </ul>
        </div>

        <div class="section">
            <h2>Data Storage and Security</h2>

            <h3>1. Data Storage</h3>
            <ul>
                <li>All data is stored on secure servers located in [Your Server Location]</li>
                <li>We implement industry-standard encryption for data in transit and at rest</li>
                <li>Regular security audits and updates are performed</li>
            </ul>

            <h3>2. Data Retention</h3>
            <ul>
                <li>Public ad data is updated regularly to maintain accuracy</li>
                <li>User activity data is retained for [X] months</li>
                <li>Account information is retained until account deletion</li>
            </ul>

            <h3>3. Security Measures</h3>
            <ul>
                <li>SSL/TLS encryption for all data transfers</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security training for staff</li>
            </ul>
        </div>

        <div class="section">
            <h2>User Rights and Choices</h2>

            <h3>1. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Export your data</li>
                <li>Opt-out of non-essential data collection</li>
                <li>Withdraw consent for optional features</li>
            </ul>

            <h3>2. Managing Your Data</h3>
            <p>You can manage your data by:</p>
            <ul>
                <li>Adjusting account settings</li>
                <li>Using browser privacy controls</li>
                <li>Contacting our support team</li>
                <li>Requesting data deletion</li>
            </ul>
        </div>

        <div class="section">
            <h2>Children's Privacy</h2>
            <p>Our service is not directed at children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
        </div>

        <div class="section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify users of any material changes through:</p>
            <ul>
                <li>Email notifications (for registered users)</li>
                <li>Site notifications</li>
                <li>Updated "Last Updated" date at the top of this policy</li>
            </ul>
        </div>

        <div class="contact-info">
            <h2>Contact Information</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <ul>
                <li>Email: info@halcyontechconsultants.com</li>
                <li>Address: 7580 NW 5th St, Plantation FL 33318</li>
                <li>Phone: 3057677919</li>
            </ul>
        </div>

        <div class="section">
            <h2>Cookie Policy</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
                <li>Maintain user sessions</li>
                <li>Remember preferences</li>
                <li>Analyze usage patterns</li>
                <li>Improve user experience</li>
            </ul>
            <p>Users can control cookie preferences through their browser settings.</p>
        </div>

        <div class="section">
            <h2>Acknowledgment</h2>
            <p>By using Meta Ads Explorer, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
        </div>
    </div>
        </div>
    );
};

export default PrivacyPolicy;