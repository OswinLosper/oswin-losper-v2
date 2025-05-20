---
type: PageLayout
title: Home
colors: colors-b
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: I'm Oswin Losper
    subtitle: ''
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-20
          - pb-1
          - pl-1
          - pr-1
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions:
      - type: Button
        label: WANT TO KNOW MORE?
        altText: ''
        url: /about
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: about
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all Posts
        url: /blogs
        iconPosition: left
        elementId: see_all
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-14
          - pb-1
          - pl-1
          - pr-1
        textAlign: left
        borderRadius: xx-small
    subtitle: ''
    title: Recent Posts
---
