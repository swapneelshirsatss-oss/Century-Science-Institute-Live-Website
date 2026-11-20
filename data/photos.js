/*
 * Every real photo the site uses, in one place. All are served from public/photos,
 * so the site no longer depends on the old WordPress uploads folder.
 * Files are high-quality JPEGs; next/image converts them to AVIF/WebP per visitor.
 * Sources: 03_Raw-Media (Nov 2026) and the largest originals on the old WordPress site.
 */
const p = (f) => `/photos/${f}`;

export const photos = {
  director: p("director-meghana-marchatwar.jpg"),
  classroom: p("classroom.jpg"),
  building: p("building.jpg"), // shortcut: only a 467x510 original exists; ask for a larger photo of the building
  felicitation: p("felicitation.jpg"),
  felicitationVenue: p("felicitation-venue.jpg"),
  felicitationStage: p("felicitation-stage.jpg"),
  felicitationGroup: p("felicitation-group.jpg"),
  culturalPerformance: p("cultural-performance.jpg"),
  parentsMeeting: p("parents-meeting.jpg"),
  annualEvent: p("annual-event.jpg"),
  csiJee: p("csi-jee-batch.jpg"),
  freshers: p("freshers-party.jpg"),
  studyMaterial: p("csi-study-material.jpg"),
  classTest: p("students-class-test.jpg"),
  blogCet: p("blog-mht-cet-2025.jpg"),
  blogJee: p("blog-jee-strategy-guide.jpg"),
};
