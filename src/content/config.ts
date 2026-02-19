import { defineCollection, z } from 'astro:content';

// ── ARTSEN ────────────────────────────────────────────────
const artsenCollection = defineCollection({
  type: 'data',
  schema: z.object({
    naam:         z.string(),
    titel:        z.string(),
    specialisatie: z.string(),
    geconventioneerd: z.boolean().default(true),
    campussen:    z.array(z.string()),
    foto:         z.string().optional(),
    bio:          z.string().optional(),
    volgorde:     z.number().default(99),
  }),
});

// ── CAMPUSSEN ─────────────────────────────────────────────
const campussenCollection = defineCollection({
  type: 'data',
  schema: z.object({
    naam:      z.string(),
    kleur:     z.string(),              // hex zonder #
    adres:     z.string(),
    gemeente:  z.string(),
    postcode:  z.string(),
    telefoon:  z.string(),
    email:     z.string().email().optional(),
    uren:      z.string().default('Ma–Vr: 08:00–17:00'),
    volgorde:  z.number().default(99),
  }),
});

// ── AANDOENINGEN ──────────────────────────────────────────
const aandoeningen = defineCollection({
  type: 'content',        // Markdown met frontmatter
  schema: z.object({
    titel:    z.string(),
    kleur:    z.string(),
    icoon:    z.string().optional(),
    excerpt:  z.string(),
    volgorde: z.number().default(99),
    gepubliceerd: z.boolean().default(true),
  }),
});

// ── KLINIEKEN ─────────────────────────────────────────────
const klinieken = defineCollection({
  type: 'content',
  schema: z.object({
    titel:    z.string(),
    kleur:    z.string(),
    icoon:    z.string(),
    excerpt:  z.string(),
    link:     z.string().optional(),
    volgorde: z.number().default(99),
    gepubliceerd: z.boolean().default(true),
  }),
});

// ── NIEUWS ────────────────────────────────────────────────
const nieuws = defineCollection({
  type: 'content',
  schema: z.object({
    titel:       z.string(),
    datum:       z.date(),
    tag:         z.string(),
    excerpt:     z.string(),
    afbeelding:  z.string().optional(),
    gepubliceerd: z.boolean().default(true),
  }),
});

export const collections = {
  artsen:      artsenCollection,
  campussen:   campussenCollection,
  aandoeningen,
  klinieken,
  nieuws,
};
