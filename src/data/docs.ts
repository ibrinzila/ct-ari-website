export type DocsLocale = 'ro' | 'ru';

type DocEntry = {
  slug: string;
  titles: Record<DocsLocale, string>;
  dates: Record<DocsLocale, string>;
};

const docs: DocEntry[] = [
  {
    slug: 'regulament-var-iii',
    titles: {
      ro: 'Regulamentul CT-ARI (Var. III)',
      ru: 'Регламент CT-ARI (Вар. III)',
    },
    dates: {
      ro: 'Aprilie 2026',
      ru: 'Апрель 2026',
    },
  },
  {
    slug: 'misiunea-ct-ari',
    titles: {
      ro: 'Misiunea CT-ARI',
      ru: 'Миссия CT-ARI',
    },
    dates: {
      ro: 'Aprilie 2026',
      ru: 'Апрель 2026',
    },
  },
  {
    slug: 'plan-actiuni-ct-ari-2026',
    titles: {
      ro: 'Plan de Acțiuni CT-ARI 2026',
      ru: 'План действий CT-ARI 2026',
    },
    dates: {
      ro: 'Aprilie 2026',
      ru: 'Апрель 2026',
    },
  },
  {
    slug: 'ordinea-de-zi',
    titles: {
      ro: 'Ordinea de Zi — Ședința 1',
      ru: 'Повестка дня — Заседание 1',
    },
    dates: {
      ro: '22 aprilie 2026',
      ru: '22 апреля 2026',
    },
  },
  {
    slug: 'nota-informativa',
    titles: {
      ro: 'Notă Informativă',
      ru: 'Информационная записка',
    },
    dates: {
      ro: 'Aprilie 2026',
      ru: 'Апрель 2026',
    },
  },
  {
    slug: 'structura-pachetului-documentelor-ct-ari',
    titles: {
      ro: 'Structura Pachetului de Documente a CT-ARI',
      ru: 'Структура пакета документов CT-ARI',
    },
    dates: {
      ro: 'Aprilie 2026',
      ru: 'Апрель 2026',
    },
  },
  {
    slug: 'prezentare-ct-ari',
    titles: {
      ro: 'Prezentare CT-ARI',
      ru: 'Презентация CT-ARI',
    },
    dates: {
      ro: 'Aprilie 2026',
      ru: 'Апрель 2026',
    },
  },
];

export function getDocs(locale: DocsLocale) {
  return docs.map((doc) => ({
    title: doc.titles[locale],
    date: doc.dates[locale],
    href: `/docs/${doc.slug}`,
  }));
}
