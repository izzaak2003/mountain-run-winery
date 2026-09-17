// Official handoffs: this demo never processes orders or bookings.
export const links = {
  official: 'https://www.mountainrunwinery.com/',
  visit: 'https://www.mountainrunwinery.com/visit-us/',
  wines: 'https://www.mountainrunwinery.com/wines/',
  events: 'https://www.mountainrunwinery.com/events-2/',
  weddings: 'https://www.mountainrunwinery.com/weddings/',
  shop: 'https://vinoshipper.com/shop/mountain_run_winery',
  directions: 'https://www.google.com/maps/search/?api=1&query=Mountain+Run+Winery+10753+Mountain+Run+Lake+Rd+Culpeper+VA+22701',
};

// A dated editorial snapshot, not a live calendar. Verified 2026-09-17.
export const events = [
  {
    month: 'SEP', day: '19', date: '2026-09-19',
    name: 'Virginia Mead & Honey Festival',
    category: 'Festival', time: 'Saturday · Noon–5 pm',
    description: 'Virginia mead, local makers, live music, and a little something sweet.',
    url: `${links.events}event/virginia-mead-honey-festival/`,
  },
  {
    month: 'OCT', day: '17', date: '2026-10-17',
    name: 'Fall Festival & Craft Fair',
    category: 'At the farm', time: 'Saturday · Noon–7 pm',
    description: 'An afternoon of handmade finds, harvest celebrations, and music in the fields.',
    url: `${links.events}event/fall-festival-and-craft-fair/`,
  },
] as const;
