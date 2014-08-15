# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize()
  add_canonical_tag()

# Add the mobile meta tags
  clean_mobile_meta_tags()


# Needed to begin mobilizing
  remove_all_styles()
# remove_scripts()
  remove_html_comments()

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

