#!/usr/bin/env python3
"""
Gallery update script for Hope Services project images.
Categorizes images and adds descriptive alt text.
"""

import json
import os

# Define categorization based on visual inspection
image_data = {
    1: {"category": "remodeling", "alt": "Modern kitchen with red cabinetry and stainless steel appliances"},
    2: {"category": "remodeling", "alt": "Contemporary bathroom with vessel sink and tile work"},
    3: {"category": "landscaping", "alt": "Outdoor pool area with stone patio and lush tropical gardens"},
    4: {"category": "landscaping", "alt": "Modern outdoor staircase with metal railing and green landscaping"},
    5: {"category": "new-construction", "alt": "Modern house exterior with pool and contemporary architecture"},
    6: {"category": "new-construction", "alt": "Interior living space with wooden staircase and modern furniture"},
    7: {"category": "other", "alt": "Agricultural field with farm equipment and mountains"},
    8: {"category": "landscaping", "alt": "Luxury pool area with wooden deck and tropical plants"},
    9: {"category": "remodeling", "alt": "Modern bathroom vanity with wooden cabinetry"},
    10: {"category": "new-construction", "alt": "Interior room with modern architecture and black door"},
    11: {"category": "new-construction", "alt": "Exterior building with contemporary design and landscaping"},
    12: {"category": "landscaping", "alt": "Covered outdoor living space with pool and wooden decking"},
    13: {"category": "landscaping", "alt": "Aerial view of outdoor property with mountain landscape"},
    14: {"category": "remodeling", "alt": "Bathroom vanity with modern fixtures and tile backsplash"},
    15: {"category": "remodeling", "alt": "Kitchen with red cabinetry and modern design"},
    16: {"category": "other", "alt": "Hope Services office interior with wooden features"},
    17: {"category": "new-construction", "alt": "Contemporary house exterior with modern architectural elements"},
    18: {"category": "other", "alt": "Agricultural truck in field"},
    19: {"category": "landscaping", "alt": "Stone retaining wall with landscape fabric"},
    20: {"category": "landscaping", "alt": "Wooden deck area with pool and garden plants"},
    21: {"category": "landscaping", "alt": "Pool area with stone features and tropical landscaping"},
    22: {"category": "landscaping", "alt": "Garden pool with lounge chairs and decorative boulders"},
    23: {"category": "other", "alt": "Agricultural field with farming equipment"},
    24: {"category": "landscaping", "alt": "Modern balcony with wooden decking and metal railings"},
    25: {"category": "remodeling", "alt": "Outdoor kitchen with grill and wooden cabinetry"},
    26: {"category": "remodeling", "alt": "Interior room with wooden ceiling and glass doors"},
    27: {"category": "remodeling", "alt": "Hallway with architectural features and decorative tub"},
    28: {"category": "landscaping", "alt": "Pool under construction with colorful safety markings"},
    29: {"category": "new-construction", "alt": "Foundation with reinforcement rebar for new construction"},
    30: {"category": "landscaping", "alt": "Luxury pool with wooden deck and tropical garden"},
    31: {"category": "other", "alt": "Service vehicles parked in evening light"},
    32: {"category": "other", "alt": "Hope Services office location map"},
    33: {"category": "remodeling", "alt": "Open-concept kitchen and living area with modern design"},
    34: {"category": "remodeling", "alt": "Staircase with modern floating design"},
    35: {"category": "remodeling", "alt": "Contemporary kitchen with bar seating and modern finishes"},
    36: {"category": "remodeling", "alt": "Modern kitchen with red cabinetry and island"},
    37: {"category": "remodeling", "alt": "Interior stairs with modern metal railings"},
    38: {"category": "new-construction", "alt": "Contemporary house with pool and modern exterior design"},
    39: {"category": "remodeling", "alt": "Kitchen interior with wooden cabinetry and modern appliances"},
    40: {"category": "new-construction", "alt": "Interior room with modern finishes and lighting"},
    41: {"category": "landscaping", "alt": "Stone pathway through lush tropical garden"},
    42: {"category": "landscaping", "alt": "Pool with decorative retaining wall and plants"},
    43: {"category": "landscaping", "alt": "Covered outdoor structure with concrete floor"},
    44: {"category": "new-construction", "alt": "Concrete foundation work with rebar installation"},
    45: {"category": "remodeling", "alt": "Modern hallway with lantern pendant lighting"},
    46: {"category": "landscaping", "alt": "Wooden gate entrance to outdoor space"},
    47: {"category": "landscaping", "alt": "Stone pathway through dense tropical vegetation"},
    48: {"category": "new-construction", "alt": "Modern interior space with wooden ceiling and finishes"},
    49: {"category": "new-construction", "alt": "Contemporary covered patio with concrete flooring"},
    50: {"category": "new-construction", "alt": "Modern house exterior with contemporary landscaping"},
    51: {"category": "new-construction", "alt": "House exterior with modern architecture and front yard"},
    52: {"category": "remodeling", "alt": "Modern kitchen with dark cabinetry and contemporary design"},
    53: {"category": "landscaping", "alt": "Stone pathway through forest garden"},
    54: {"category": "landscaping", "alt": "Wooden deck area with covered structure and seating"},
    55: {"category": "landscaping", "alt": "Pool area aerial view with landscaping"},
    56: {"category": "other", "alt": "Hope Services company logo"},
    57: {"category": "other", "alt": "Hope Services company logo"},
    58: {"category": "landscaping", "alt": "Swimming pool with metal handrails and tiled edges"},
    59: {"category": "new-construction", "alt": "Contemporary house exterior with black door and railing"},
    60: {"category": "landscaping", "alt": "Infinity pool with modern design and landscape views"},
    61: {"category": "remodeling", "alt": "Modern kitchen with wooden cabinetry and island"},
    62: {"category": "landscaping", "alt": "Wooden deck with covered structure and garden"},
    63: {"category": "new-construction", "alt": "Construction site with framing and structural work"},
    64: {"category": "other", "alt": "Hope Services company logo"},
    65: {"category": "landscaping", "alt": "Retaining wall with stone and landscape construction"},
    66: {"category": "landscaping", "alt": "Infinity pool overlooking landscape with modern design"},
    67: {"category": "new-construction", "alt": "Modern house exterior with pool and contemporary architecture"},
    68: {"category": "landscaping", "alt": "Stone retaining wall construction with drainage system"},
    69: {"category": "landscaping", "alt": "Large water containment pond with landscape covering"},
}

def update_gallery():
    """Update gallery.json with categorized data and alt text."""
    gallery_path = "/sessions/beautiful-hopeful-hopper/mnt/Hope Service Website/site/gallery.json"

    # Read existing gallery data
    with open(gallery_path, 'r') as f:
        gallery = json.load(f)

    # Update each photo with category and alt text
    for item in gallery:
        photo_id = item["id"]
        if photo_id in image_data:
            item["category"] = image_data[photo_id]["category"]
            item["alt"] = image_data[photo_id]["alt"]

    # Write updated gallery data
    with open(gallery_path, 'w') as f:
        json.dump(gallery, f, indent=2)

    print("Gallery updated successfully!")

    # Print summary
    categories = {}
    for item in gallery:
        cat = item["category"]
        categories[cat] = categories.get(cat, 0) + 1

    print("\nCategory Summary:")
    for cat, count in sorted(categories.items()):
        print(f"  {cat}: {count} images")

if __name__ == "__main__":
    update_gallery()
