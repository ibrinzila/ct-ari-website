export type MeetingLaunchLang = 'ro' | 'ru';

export interface MeetingLaunchContent {
  banner: string;
  title: string;
  summary: string;
  spotlightLabel: string;
  spotlightBody: string;
  meetingPageTitle: string;
  meetingPageIntro: string;
  meetingPageNotice: string;
  scheduleLabel: string;
  governanceLabel: string;
  observeLabel: string;
  observePendingLabel: string;
  observePendingBody: string;
  detailsLabel: string;
  fullPageLabel: string;
  embedTitle: string;
  embedBody: string;
  inviteOnlyTitle: string;
  inviteOnlyBody: string;
  previewHint: string;
}

export interface MeetingLaunchConfig {
  activeFromUtc: string;
  activeUntilUtc: string;
  previewQueryKey: string;
  dopomohaHost: string;
  governanceUrl: string;
  joinUrl: string | null;
  embedMinHeight: string;
  routes: {
    rootRo: string;
    ro: string;
    ru: string;
  };
  content: Record<MeetingLaunchLang, MeetingLaunchContent>;
}

export const meetingLaunchConfig: MeetingLaunchConfig = {
  activeFromUtc: '2026-04-21T21:00:00.000Z',
  activeUntilUtc: '2026-04-22T20:59:59.000Z',
  previewQueryKey: 'previewMeeting',
  dopomohaHost: 'https://dopomoha.md',
  governanceUrl: 'https://dopomoha.md/gov/ct-ari',
  joinUrl: null,
  embedMinHeight: '980px',
  routes: {
    rootRo: '/sedinta-22-aprilie',
    ro: '/ro/sedinta-22-aprilie',
    ru: '/ru/zasedanie-22-aprelya',
  },
  content: {
    ro: {
      banner: 'Ședință publică · 22 aprilie',
      title: 'Participă la ședința de constituire CT-ARI',
      summary: 'Urmărește pagina dedicată pentru agenda publică, documentele governance și, dacă este activat, accesul către fluxurile membre pe Dopomoha.',
      spotlightLabel: '22 aprilie 2026 · CT-ARI',
      spotlightBody: 'În ziua ședinței, pagina principală deschide rapid accesul către observație online și către spațiul public governance.',
      meetingPageTitle: 'Ședința de constituire CT-ARI · 22 aprilie 2026',
      meetingPageIntro: 'Această pagină centralizează informațiile publice pentru ședința de constituire a Consiliului de Tineret pe lângă Agenția Relații Interetnice și deschide accesul către spațiul governance găzduit pe Dopomoha.',
      meetingPageNotice: 'Pagina governance este publică pentru observare și informare. Votul și semnarea rămân personale, pe linkurile trimise membrilor invitați.',
      scheduleLabel: '22 aprilie 2026 · Europa/Chișinău · ora exactă și linkul de conectare se confirmă în pagina governance.',
      governanceLabel: 'Guvernanță CT-ARI',
      observeLabel: 'Observă online',
      observePendingLabel: 'Linkul de conectare va fi publicat aici',
      observePendingBody: 'În prezent nu există un link Meet sau Zoom confirmat în configurația ședinței. Până atunci, pagina governance rămâne punctul oficial pentru agendă și actualizări.',
      detailsLabel: 'Participă / detalii governance',
      fullPageLabel: 'Deschide governance în pagină separată',
      embedTitle: 'Spațiul governance găzduit pe Dopomoha',
      embedBody: 'Dacă embedul nu se încarcă, deschide pagina publică governance într-o filă separată. Fluxurile OTP și pașii sensibili se pot deschide automat top-level.',
      inviteOnlyTitle: 'Ce este public și ce rămâne pe invitație',
      inviteOnlyBody: 'Oricine poate urmări informațiile publice și materialele publicate. Membrii votează și semnează doar prin linkurile personale primite din Dopomoha.',
      previewHint: 'Adaugă ?previewMeeting=1 pentru a previzualiza spotlight-ul înainte de fereastra activă.',
    },
    ru: {
      banner: 'Публичное заседание · 22 апреля',
      title: 'Присоединяйся к учредительному заседанию CT-ARI',
      summary: 'На этой странице будет собран публичный порядок дня, документы governance и, при активации, переход к членским потокам через Dopomoha.',
      spotlightLabel: '22 апреля 2026 · CT-ARI',
      spotlightBody: 'В день заседания главная страница быстро ведёт к онлайн-наблюдению и к публичному пространству governance.',
      meetingPageTitle: 'Учредительное заседание CT-ARI · 22 апреля 2026',
      meetingPageIntro: 'Эта страница собирает публичную информацию по учредительному заседанию Молодёжного совета при Агентстве межэтнических отношений и ведёт к размещённому на Dopomoha пространству governance.',
      meetingPageNotice: 'Страница governance открыта для наблюдения и ознакомления. Голосование и подпись остаются персональными и доступны только по ссылкам, отправленным приглашённым членам.',
      scheduleLabel: '22 апреля 2026 · Европа/Кишинёв · точное время и ссылка на подключение будут подтверждены на странице governance.',
      governanceLabel: 'Governance CT-ARI',
      observeLabel: 'Наблюдать онлайн',
      observePendingLabel: 'Ссылка на подключение появится здесь',
      observePendingBody: 'Сейчас в конфигурации заседания нет подтверждённой ссылки Meet или Zoom. До её появления официальной точкой входа остаётся страница governance.',
      detailsLabel: 'Участие / детали governance',
      fullPageLabel: 'Открыть governance в отдельной вкладке',
      embedTitle: 'Governance-пространство на Dopomoha',
      embedBody: 'Если embed не загрузился, открой governance-страницу в отдельной вкладке. OTP и чувствительные шаги могут автоматически открываться top-level.',
      inviteOnlyTitle: 'Что публично, а что только по приглашению',
      inviteOnlyBody: 'Любой посетитель может читать публичные материалы и следить за процессом. Голосование и подписание доступны только участникам по персональным ссылкам из Dopomoha.',
      previewHint: 'Добавь ?previewMeeting=1, чтобы показать карточку до активного окна.',
    },
  },
};

export function getMeetingLaunchContent(lang: MeetingLaunchLang): MeetingLaunchContent {
  return meetingLaunchConfig.content[lang];
}

export function getMeetingPageHref(lang: MeetingLaunchLang, useRootDefault = false): string {
  if (lang === 'ru') {
    return meetingLaunchConfig.routes.ru;
  }

  return useRootDefault ? meetingLaunchConfig.routes.rootRo : meetingLaunchConfig.routes.ro;
}
