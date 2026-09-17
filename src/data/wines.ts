// An editorial selection, not live stock. Source: official winery wine list.
// Reviewed 2026-09-17. Keep descriptions and the visible review date in sync.
interface Wine {
  name: string;
  style: string;
  description: string;
}

interface WineGroup {
  id: string;
  name: string;
  wines: Wine[];
}

export const wineGroups: WineGroup[] = [
  {
    id: 'whites', name: 'Whites', wines: [
      {
        name: 'Viognier', style: 'Floral white',
        description: 'Known at the winery as “Vinny.” Look for peach and honeysuckle in the aroma.',
      },
      {
        name: 'Culpeper LOVE', style: 'Off-dry white blend',
        description: 'Chardonnay meets Viognier. First made in 2019 to mark 50 years of “Virginia is for Lovers.”',
      },
    ],
  },
  {
    id: 'roses', name: 'Rosés', wines: [
      {
        name: 'Dirt Road Rosé', style: 'Dry rosé',
        description: 'A light rosé with red-berry notes, made from Cabernet Sauvignon, Cabernet Franc, and Petit Verdot.',
      },
      {
        name: 'Dog Rock Rosé', style: 'Rosé with a little sweetness',
        description: 'Shiraz and Crimson Cabernet, with strawberry followed by grapefruit on the finish.',
      },
    ],
  },
  {
    id: 'reds', name: 'Reds', wines: [
      {
        name: 'Meritage', style: 'Bordeaux-style red blend',
        description: 'Merlot, Cabernet Franc, Cabernet Sauvignon, and Petit Verdot make a full-bodied red with firm tannins.',
      },
      {
        name: 'Culpeper Crimson', style: 'Norton & Cabernet Sauvignon',
        description: 'Named in celebration of the Culpeper Minutemen. The tasting notes lean toward leather and tobacco, with clove from Norton.',
      },
    ],
  },
];
