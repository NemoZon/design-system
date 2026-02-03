Component structure follows Atomic Design. Place UI pieces in the lowest applicable layer:

- atoms: indivisible UI primitives (buttons, inputs, icons, typography).
- molecules: small combinations of atoms that act together (form fields, cards).
- organisms: complex sections composed of molecules/atoms (navbars, hero blocks, tables).
- templates: page-level skeletons that lay out organisms without real data.
- pages: routed screens with real copy/data; wire templates to data/loading states.
