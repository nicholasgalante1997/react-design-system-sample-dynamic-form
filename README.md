# Spectrum, Re-Usable Server Driven UI Prototype

## How does this work?

## UI Composition

Inputs & Labels => Interactables => SubGroup => Section => Page => Form

A Form can have many pages
A Form can have one action
A Form can have one endpoint that it uses to pull its shape
A Form has a Header
A Form has a Footer With Actions
A Form has a Body that changes given a page configuration

Pages are comprised of Sections.
A Page has n number of Sections.
A Page has an ordered number.
A Page can be collapsible.
A Page has a title.

A Section is a horizontal widget in the form.
A Section can have a title.
A Section has Subgroups.
A Section is a Widget.
A Subgroup is a Row Within The Section.
Subgroups are stacked vertically.
A Section can have assistive links.
If a Section has assistive links, they appear in a SectionFooter.

A Subgroup has a or multiple interactables.
A Subgroup organizes its interactables horizontally.
A Subgroup does not have a title.

An Interactable is a Form Group. Interactables have specific shapes with required props.
Valid Form Groups are Input, Radio, BadgeSelection, ColorPicker, Dropdown (Select)

Forms can be engaged with via links and buttons.
