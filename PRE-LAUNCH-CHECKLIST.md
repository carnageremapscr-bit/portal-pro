# 🚀 Portal Pro - Pre-Launch Checklist

## Complete this before going live with webportalpro.co.uk

---

## ✅ PHASE 1: TECHNICAL SETUP (Critical - Do First)

### Domain & Hosting
- [ ] **Point domain to Railway**:
  - Go to your domain registrar (GoDaddy/Namecheap/etc.)
  - Add CNAME record: `www` → `portal-pro-portal-pro.up.railway.app`
  - Add A record: `@` → Railway IP (or use CNAME flattening)
  - Wait 24-48 hours for DNS propagation
  - Test at [DNS Checker](https://dnschecker.org/)

- [ ] **Update all URLs in code**:
  ```
  Find: portal-pro-portal-pro.up.railway.app
  Replace: webportalpro.co.uk
  ```
  - [ ] All 9 HTML pages (canonical tags)
  - [ ] sitemap.xml (all <loc> tags)
  - [ ] All schema markup (@id and url fields)
  - [ ] Open Graph meta tags (og:url, og:image)

- [ ] **SSL Certificate**:
  - [ ] Verify HTTPS works on webportalpro.co.uk
  - [ ] Force HTTPS redirect (all HTTP → HTTPS)
  - [ ] Check SSL rating at [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## ✅ PHASE 2: GOOGLE SEARCH CONSOLE (Day 1)

- [ ] **Add Property**:
  1. Go to [Google Search Console](https://search.google.com/search-console)
  2. Click "Add Property"
  3. Enter: `webportalpro.co.uk`
  4. Verify ownership (choose HTML file upload method)
  5. Also add `www.webportalpro.co.uk` as separate property

- [ ] **Submit Sitemap**:
  - URL to submit: `https://webportalpro.co.uk/sitemap.xml`
  - Check back in 24 hours to see indexing status

- [ ] **Request Indexing**:
  - Manually request indexing for top 5 pages:
    - Homepage
    - portal-design.html
    - pricing.html
    - reviews.html
    - tuning-tools.html

---

## ✅ PHASE 3: ANALYTICS & TRACKING (Day 1-2)

### Google Analytics 4
- [ ] Create GA4 property at [analytics.google.com](https://analytics.google.com)
- [ ] Get tracking ID (G-XXXXXXXXXX)
- [ ] Add to all pages in `<head>` section:
  ```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```

### Event Tracking
- [ ] Track WhatsApp button clicks
- [ ] Track email clicks
- [ ] Track phone number clicks
- [ ] Track demo page views
- [ ] Track pricing page views

### Google Tag Manager (Optional but Recommended)
- [ ] Create GTM container
- [ ] Add container code to all pages
- [ ] Move GA4 code into GTM
- [ ] Set up event triggers (clicks, scrolls, form submissions)

---

## ✅ PHASE 4: CONTENT VERIFICATION (Week 1)

### Text Content
- [ ] **Proofread all pages** for typos
- [ ] **Check grammar** (use Grammarly or similar)
- [ ] **Verify contact info** (phone, email, WhatsApp)
- [ ] **Update "2026"** to current year (future-proof)
- [ ] **Replace placeholder text** with real client names/testimonials

### Images
- [ ] **Replace demo images** with real screenshots:
  - Homepage hero images (3 images)
  - Portal dashboard screenshot
  - Widget demo screenshot
  - Client logos (if available)
  
- [ ] **Optimize all images**:
  - Convert PNG → WebP (60-80% smaller)
  - Target max 200KB per image
  - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
  - Update HTML `<img src="...">` paths

- [ ] **Add alt text** to every image:
  - Descriptive (not just "image")
  - Include keywords where natural
  - Example: "ECU tuning file portal dashboard showing client uploads"

### Video Content
- [ ] **Record portal demo video** (2-5 minutes):
  - Screen recording with voiceover
  - Show file upload process
  - Show automated invoicing
  - Show client dashboard
  - Upload to YouTube
  - Add video embed to portal-design.html

- [ ] **Create YouTube channel**:
  - Channel name: Portal Pro UK
  - Description with keywords
  - Link to website
  - Optimize video titles/descriptions for SEO

---

## ✅ PHASE 5: SCHEMA MARKUP VALIDATION (Week 1)

- [ ] **Test all schema types**:
  - Go to [Rich Results Test](https://search.google.com/test/rich-results)
  - Test each page individually
  - Fix any errors or warnings
  
  Pages to test:
  - [ ] index.html (Organization, Service, FAQPage)
  - [ ] portal-design.html (SoftwareApplication, LocalBusiness, FAQPage)
  - [ ] reviews.html (Review, Product, AggregateRating)
  - [ ] pricing.html (Product, Offer)
  - [ ] how-it-works.html (HowTo)
  - [ ] tuning-tools.html (SoftwareApplication)

- [ ] **Verify structured data in GSC**:
  - After 1-2 weeks, check "Enhancements" section
  - Look for FAQs, Reviews, Products appearing

---

## ✅ PHASE 6: BACKLINK BUILDING (Week 1-4)

### Easy Quick Wins (Do in Week 1)
- [ ] **UK Business Directories** (10-15 links):
  - [ ] FreeIndex.co.uk
  - [ ] Yell.com
  - [ ] Thomson Local
  - [ ] Scoot.co.uk
  - [ ] Touch Local
  - [ ] Yelp UK
  - [ ] Cylex UK
  - [ ] Hotfrog UK
  - [ ] 192.com
  - [ ] BrownBook.net

### Social Media Profiles (Week 1)
- [ ] **Create business profiles** (5-8 links):
  - [ ] Facebook Business Page → Link to website
  - [ ] Instagram Business → Bio link
  - [ ] Twitter/X → Profile link
  - [ ] LinkedIn Company Page → Website field
  - [ ] YouTube Channel → Description + about
  - [ ] Pinterest Business → Profile link
  - [ ] TikTok Business (optional)

### Google Business Profile (Week 1) 🔥 HIGH PRIORITY
- [ ] **Create/Claim listing**:
  1. Go to [Google Business Profile](https://www.google.com/business/)
  2. Add business: "Portal Pro"
  3. Category: "Software Company" + "Web Designer"
  4. Address: Your physical location (if applicable)
  5. Service area: UK-wide
  6. Phone: +44 7546 371963
  7. Website: webportalpro.co.uk
  8. Hours: Mon-Sat 9am-6pm
  9. Description: 300+ words with keywords
  10. Photos: Logo, screenshots, team photos

- [ ] **Optimize GBP**:
  - Add all services (ECU Portal, Website Design, VRM Widget)
  - Upload 10+ photos
  - Get first 5 Google reviews from clients
  - Post weekly updates (Google Posts)

### Automotive Industry Links (Week 2-3)
- [ ] **Forum Signatures** (5-10 links):
  - PistonHeads.com
  - UK-MKIVS.net
  - OBD-Tuning.com
  - Supra Forums
  - Skyline Forums
  - Join as real user, add signature with link

- [ ] **Partner Opportunities** (2-5 links):
  - Contact Alientech → Ask for partner listing
  - Contact Autotuner → Integration partner page
  - Contact Dimsport → Compatible software list
  - Reach out to tuning file suppliers

### Client Website Backlinks (Ongoing)
- [ ] **Add to client sites** (10-20 links potential):
  - Offer: "Powered by Portal Pro" footer badge
  - Provide embed code with link
  - Give small discount for adding link
  - Target: 2-3 new client links per month

---

## ✅ PHASE 7: MOBILE & CROSS-BROWSER TESTING (Week 1)

### Mobile Testing
- [ ] **Test on real devices**:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad/Tablet
  
- [ ] **Check responsive design**:
  - [ ] Navigation works on mobile
  - [ ] Dropdown menu functions
  - [ ] WhatsApp button visible & clickable
  - [ ] Forms are easy to fill
  - [ ] Images don't break layout
  - [ ] Text is readable (min 16px)

### Desktop Testing
- [ ] **Test in multiple browsers**:
  - [ ] Chrome (70% of users)
  - [ ] Safari (15% of users)
  - [ ] Edge (8% of users)
  - [ ] Firefox (5% of users)
  
- [ ] **Check functionality**:
  - [ ] Dropdown menus work
  - [ ] Smooth scrolling works
  - [ ] WhatsApp button opens correctly
  - [ ] Email links work (mailto:)
  - [ ] Phone links work (tel:)

### Performance Testing
- [ ] **PageSpeed Insights**:
  - Test: [PageSpeed](https://pagespeed.web.dev/)
  - Target: 80+ on Mobile, 90+ on Desktop
  - Fix any red/orange issues

- [ ] **GTmetrix**:
  - Test: [GTmetrix](https://gtmetrix.com/)
  - Target: Grade A or B
  - Check Core Web Vitals

---

## ✅ PHASE 8: SEO FINAL CHECKS (Week 1)

### On-Page SEO
- [ ] **Every page has**:
  - [ ] Unique title tag (55-60 chars)
  - [ ] Unique meta description (150-160 chars)
  - [ ] H1 tag with primary keyword
  - [ ] H2-H3 tags for structure
  - [ ] Keywords meta tag (30-50 keywords)
  - [ ] Canonical URL pointing to self
  - [ ] Open Graph tags for social sharing
  - [ ] Schema markup (at least 1 type)

### Internal Linking
- [ ] **Verify navigation**:
  - Every page links to homepage
  - Every page links to 3-5 related pages
  - Footer has links to all main pages
  - No broken internal links

### External Links
- [ ] **Check outbound links**:
  - WhatsApp links work
  - Email links work
  - Phone links work
  - Social media icons link correctly
  - No 404 errors on external links

---

## ✅ PHASE 9: CONVERSION OPTIMIZATION (Week 2)

### Lead Capture
- [ ] **Multiple contact methods visible**:
  - [ ] WhatsApp floating button on all pages
  - [ ] Email in header/footer
  - [ ] Phone number clickable
  - [ ] Contact section on homepage
  
- [ ] **Call-to-Action buttons**:
  - [ ] High contrast colors
  - [ ] Clear action words ("Get Started", "Contact Us", "View Pricing")
  - [ ] Visible above fold
  - [ ] Multiple CTAs per page (2-3 minimum)

### Trust Signals
- [ ] **Add to all pages**:
  - [ ] Client count (100+)
  - [ ] Star rating (5★)
  - [ ] Response time (2hr)
  - [ ] Uptime guarantee (99.9%)
  - [ ] Money-back guarantee
  - [ ] SSL badge in footer
  - [ ] Client testimonials visible

---

## ✅ PHASE 10: CONTENT MARKETING SETUP (Week 2-3)

### Blog/Resources Page
- [ ] **Write first 3 blog posts**:
  1. "How to Choose the Right ECU Portal for Your Business"
  2. "Alientech vs Autotuner: Which ECU Tool is Best?"
  3. "ECU Remapping Pricing Guide UK 2026"
  
- [ ] **Optimize each post**:
  - 800-1500 words
  - Include target keywords
  - Add internal links
  - Add images with alt text
  - Add FAQs at bottom
  - Add schema markup (Article type)

### Email Marketing
- [ ] **Set up email collection**:
  - Add newsletter signup form
  - Offer lead magnet (free guide)
  - Connect to Mailchimp/ConvertKit
  - Create welcome email sequence

---

## ✅ PHASE 11: SECURITY & COMPLIANCE (Week 1)

### Legal Pages (Create these)
- [ ] **Privacy Policy** (required for GDPR):
  - Use generator: [Privacy Policy Generator](https://www.privacypolicygenerator.info/)
  - Mention: Cookies, Analytics, Contact Forms, Data Storage
  - Link in footer

- [ ] **Terms of Service**:
  - Service terms
  - Refund policy
  - Liability limitations
  - Link in footer

- [ ] **Cookie Consent**:
  - Add cookie banner (if using analytics)
  - Use [CookieYes](https://www.cookieyes.com/) or similar
  - GDPR compliant

### Security Headers
- [ ] **Add to .htaccess** (if using Apache):
  ```apache
  # Security Headers
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Force HTTPS
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  ```

---

## ✅ PHASE 12: POST-LAUNCH MONITORING (Week 1-4)

### Week 1 Checklist
- [ ] **Daily checks**:
  - [ ] Check Google Search Console for errors
  - [ ] Monitor Google Analytics for traffic
  - [ ] Test all contact forms/buttons
  - [ ] Check for broken links
  - [ ] Monitor server uptime (Railway dashboard)

### Week 2-4 Checklist
- [ ] **Weekly tasks**:
  - [ ] Review organic traffic growth
  - [ ] Check keyword rankings (Google Search Console)
  - [ ] Add 5 new backlinks
  - [ ] Publish 1 new blog post
  - [ ] Respond to any client reviews
  - [ ] Update testimonials if new ones received

### Monthly Checklist
- [ ] **Review metrics**:
  - Organic traffic trend
  - Conversion rate (leads per visitor)
  - Bounce rate (should be <60%)
  - Top landing pages
  - Top keywords bringing traffic
  
- [ ] **Content updates**:
  - Publish 4 blog posts
  - Build 20 new backlinks
  - Update old content if needed
  - Add new testimonials/case studies

---

## 🎯 SUCCESS CRITERIA

### Week 1 Goals ✅
- [ ] All pages indexed in Google (check GSC)
- [ ] 0 errors in Search Console
- [ ] 20+ backlinks created
- [ ] First 10 organic visitors

### Month 1 Goals ✅
- [ ] 100+ organic visitors
- [ ] 5+ keyword rankings (any position)
- [ ] 50+ backlinks
- [ ] 5+ leads generated

### Month 3 Goals ✅
- [ ] 500+ organic visitors
- [ ] Page 2-3 rankings for "ECU portal UK"
- [ ] 100+ backlinks
- [ ] 20+ leads generated

---

## ⚠️ COMMON MISTAKES TO AVOID

### SEO Mistakes
- ❌ Don't buy backlinks (Google penalty)
- ❌ Don't copy content from competitors
- ❌ Don't keyword stuff (use keywords naturally)
- ❌ Don't use duplicate meta descriptions
- ❌ Don't forget mobile optimization

### Technical Mistakes
- ❌ Don't launch without SSL
- ❌ Don't forget to set up Google Analytics
- ❌ Don't use huge uncompressed images
- ❌ Don't block pages in robots.txt by accident
- ❌ Don't forget to update domain URLs from Railway

### Marketing Mistakes
- ❌ Don't expect instant results (SEO takes 3-6 months)
- ❌ Don't neglect Google Business Profile
- ❌ Don't ignore mobile users (60%+ of traffic)
- ❌ Don't forget to ask clients for reviews
- ❌ Don't launch without backlink plan

---

## 📞 EMERGENCY CONTACTS

**Website Issues:**
- Railway Support: support@railway.app
- Domain Registrar: [Your registrar support]

**Marketing Questions:**
- Google Search Console Help
- Google Analytics Help

**Technical Help:**
- [Your developer - that's me! 😊]

---

## ✨ YOU'RE READY TO LAUNCH WHEN:

- ✅ Domain points to Railway (DNS propagated)
- ✅ All URLs updated from Railway to webportalpro.co.uk
- ✅ Google Search Console verified
- ✅ Sitemap submitted
- ✅ Google Analytics installed
- ✅ At least 20 backlinks built
- ✅ All pages tested on mobile
- ✅ No broken links
- ✅ Privacy Policy added
- ✅ First blog post published

---

**Good luck! 🚀 You've got this!**

If you complete this checklist, you'll be ahead of 90% of competitors in SEO readiness.

---

*Last Updated: January 25, 2026*
