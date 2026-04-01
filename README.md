# Hope Services Website

Construction & Landscaping website for Hope Services, Uvita, Costa Rica.

## Quick Setup Guide

### 1. Create GitHub Repository

```bash
# From the site/ folder on your computer:
cd /path/to/Hope\ Service\ Website/site

# Create the repo on GitHub (requires gh CLI)
gh repo create hopeservicescostarica --public --source=. --remote=origin

# Or create it manually on github.com, then:
git remote add origin https://github.com/ryangillum/hopeservicescostarica.git

# Push everything
git add -A
git commit -m "Initial site launch"
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to https://github.com/ryangillum/hopeservicescostarica/settings/pages
2. Under "Source", select **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click Save
5. Wait 1-2 minutes, your site will be live at `https://ryangillum.github.io/hopeservicescostarica`

### 3. Connect Cloudflare Domain (hopeservicescostarica.com)

In your Cloudflare dashboard for hopeservicescostarica.com:

1. Go to **DNS > Records**
2. Add these records:

| Type  | Name | Content                          |
|-------|------|----------------------------------|
| CNAME | @    | ryangillum.github.io             |
| CNAME | www  | ryangillum.github.io             |

3. Make sure the proxy status is **DNS only** (gray cloud) for both — GitHub Pages needs this for HTTPS.

4. In GitHub repo Settings > Pages > Custom domain, enter: `hopeservicescostarica.com` and check "Enforce HTTPS"

5. The `CNAME` file is already in the repo with `hopeservicescostarica.com`

### 4. Set Up Contact Form

1. In `index.html`, find `YOUR_EMAIL_HERE` and replace it with the email address for receiving inquiries
2. Submit the form once after deploying — check email for the FormSubmit confirmation link

### 5. Set Up Turnstile Bot Protection (Optional)

1. Go to Cloudflare Dashboard > Turnstile
2. Add site, select "Managed" widget
3. In `index.html`, replace `YOUR_TURNSTILE_SITE_KEY` with your site key

---

## Gallery Admin Panel

The site includes a password-protected admin page at `/admin/` for managing gallery photos.

**URL:** `https://hopeservicescostarica.com/admin/`

### How It Works

1. Log in with the admin password
2. The admin loads your current gallery photos automatically
3. Add new photo entries, change categories, edit alt text, or delete photos
4. Click **Export gallery-data.js** to generate the updated data file
5. Copy the code or download the file
6. Replace `js/gallery-data.js` in your repo and commit/push

### Adding New Photos (Full Workflow)

1. Open the admin panel and add your new photo entries
2. Upload the actual image files to your GitHub repo:
   - Full size (1200px wide) goes in `images/gallery/`
   - Thumbnail (400px wide) goes in `images/thumbnails/`
3. Export the updated `gallery-data.js` from admin
4. Replace `js/gallery-data.js` in your repo
5. Commit and push — the site updates automatically

---

## Managing the Gallery (Manual Method)

The gallery is driven by a single file: **`js/gallery-data.js`**

### Adding Photos Manually
1. Optimize your photo (recommended: max 1200px wide, JPEG, under 300KB)
2. Save the full-size version in `images/gallery/` (e.g., `photo-070.jpg`)
3. Save a thumbnail (400px wide) in `images/thumbnails/` with the same filename
4. Add an entry to the array in `js/gallery-data.js`:

```json
{
  "id": 70,
  "file": "photo-070.jpg",
  "category": "landscaping",
  "alt": "Garden pathway project in Uvita"
}
```

### Categories
Use one of these category values:
- `landscaping`
- `new-construction`
- `remodeling`
- `other`

### Quick Image Optimization (Mac/Linux)
If you have ImageMagick installed:
```bash
# Create gallery image (max 1200px)
convert input.jpg -resize 1200x1200\> -quality 82 images/gallery/photo-070.jpg

# Create thumbnail (max 400px)
convert input.jpg -resize 400x400\> -quality 75 images/thumbnails/photo-070.jpg
```

---

## File Structure
```
site/
├── index.html          # Main website
├── CNAME               # Custom domain config
├── admin/
│   └── index.html      # Gallery admin panel
├── css/
│   └── style.css       # Stylesheet
├── js/
│   ├── gallery-data.js # Gallery photo list (add/remove photos here)
│   └── main.js         # JavaScript functionality
├── images/
│   ├── gallery/        # Full-size gallery photos
│   ├── thumbnails/     # Thumbnail versions (400px)
│   └── logo/           # Logo files
└── README.md           # This file
```

## Editing Reviews
Reviews are in `index.html` inside the `#reviews` section. Edit the HTML directly to add, remove, or change reviews.

## Editing Social Links
Social media links appear in three places in `index.html`:
1. Mobile navigation
2. Contact section
3. Footer

Search for the current URLs and replace them with updated ones.
