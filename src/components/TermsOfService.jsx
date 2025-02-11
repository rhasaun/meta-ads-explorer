import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <nav className="mb-8">
                <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
            </nav>
            <div class="container">
        <h1>Meta Ads Explorer Terms of Service</h1>
        <p class="last-updated">Last Updated: February 11, 2025</p>

        <div class="section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using Meta Ads Explorer ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.</p>
        </div>

        <div class="section">
            <h2>2. Description of Service</h2>
            <p>Meta Ads Explorer is a tool designed to explore and analyze publicly available advertisements from Meta's platforms (Facebook and Instagram). The Service provides:</p>
            <ul>
                <li>Access to public advertisement data</li>
                <li>Analysis tools and visualization features</li>
                <li>Brand comparison capabilities</li>
                <li>Design trend identification tools</li>
            </ul>
        </div>

        <div class="section">
            <h2>3. User Accounts</h2>
            <h3>3.1 Account Creation</h3>
            <p>To use certain features of the Service, you may be required to create an account. You agree to:</p>
            <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain and update your information</li>
                <li>Keep your password secure</li>
                <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h3>3.2 Account Responsibilities</h3>
            <p>You are responsible for:</p>
            <ul>
                <li>All activities that occur under your account</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>Any consequences arising from account sharing</li>
            </ul>
        </div>

        <div class="section">
            <h2>4. Acceptable Use</h2>
            <h3>4.1 Permitted Use</h3>
            <p>You may use the Service for:</p>
            <ul>
                <li>Analyzing public advertisement trends</li>
                <li>Research and educational purposes</li>
                <li>Brand and market analysis</li>
                <li>Personal or professional development</li>
            </ul>

            <h3>4.2 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Attempt to reverse engineer the Service</li>
                <li>Use the Service for unauthorized data collection</li>
                <li>Interfere with the Service's operation</li>
                <li>Create multiple accounts for abusive purposes</li>
            </ul>
        </div>

        <div class="section">
            <h2>5. Data Usage and Privacy</h2>
            <p>Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to our data practices as described in the Privacy Policy.</p>
            
            <h3>5.1 Data Collection</h3>
            <p>We collect and process data as outlined in our Privacy Policy, including:</p>
            <ul>
                <li>User account information</li>
                <li>Usage data and analytics</li>
                <li>Public advertisement data</li>
            </ul>
        </div>

        <div class="section">
            <h2>6. Intellectual Property</h2>
            <h3>6.1 Service Content</h3>
            <p>All content within the Service, including but not limited to:</p>
            <ul>
                <li>Software</li>
                <li>Analytics tools</li>
                <li>Visual designs</li>
                <li>User interface</li>
            </ul>
            <p>is the property of Meta Ads Explorer and is protected by intellectual property laws.</p>

            <h3>6.2 User Content</h3>
            <p>You retain rights to any content you submit through the Service, but grant us a license to use, modify, and display such content for Service-related purposes.</p>
        </div>

        <div class="section">
            <h2>7. Limitation of Liability</h2>
            <div class="important">
                <p>The Service is provided "as is" without warranties of any kind. We are not liable for:</p>
                <ul>
                    <li>Service interruptions or errors</li>
                    <li>Data loss or corruption</li>
                    <li>Financial losses resulting from Service use</li>
                    <li>Accuracy of analysis results</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2>8. Termination</h2>
            <p>We may terminate or suspend your account and access to the Service:</p>
            <ul>
                <li>For violations of these Terms</li>
                <li>At our sole discretion</li>
                <li>Without prior notice or liability</li>
            </ul>
        </div>

        <div class="section">
            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes through:</p>
            <ul>
                <li>Email: info@halcyontechconsultants.com</li>
                <li>Address: 7580 NW 5th St, Plantation FL 33318</li>
                <li>Phone: 3057677919</li>
            </ul>
            <p>Your continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
        </div>

        <div class="section">
            <h2>10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
        </div>

        <div class="section">
            <h2>11. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <ul>
                <li>Email: [Your Contact Email]</li>
                <li>Address: [Your Physical Address]</li>
                <li>Phone: [Your Contact Number]</li>
            </ul>
        </div>

        <div class="section">
            <h2>12. Acknowledgment</h2>
            <p>By using Meta Ads Explorer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
        </div>
    </div>
        </div>
    );
};

export default TermsOfService;