export interface FoodItem {
  id: string;
  name: string;
  slug: string;
  isSafe: boolean;
  image: string;
  overview: string;
  risks?: string;
  benefits?: string;
  vetChecked: boolean;
}

export const foods: FoodItem[] = [
  {
    id: '1',
    name: 'Winogrono',
    slug: 'winogrono',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie. Psy nie powinny jeść winogron. Dokładna przyczyna toksyczności winogron nadal nie jest jednoznaczna. Gdy pies spożyje winogrona, może to prowadzić do ostrego uszkodzenia nerek, przewlekłej choroby nerek lub niewydolności nerek, jeśli nie zostanie podjęte leczenie.',
    risks: 'Spożycie winogron może prowadzić do powikłań u psów, takich jak uszkodzenie nerek, przewlekła choroba nerek lub niewydolność nerek, jeśli nie zostanie podjęte leczenie. Niedawne badanie ASPCA wykazało, że może istnieć związek między kwasem winowym a toksycznością u psów, jednak nie jest to jeszcze ostatecznie potwierdzone.',
    vetChecked: true
  },
  {
    id: '2',
    name: 'Marchewka',
    slug: 'marchewka',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Marchewka jest zdrową przekąską dla psów. Jest niskokaloryczna i bogata w błonnik oraz witaminy.',
    benefits: 'Marchewka jest bogata w beta-karoten, błonnik i witaminy. Może pomóc w utrzymaniu zdrowia zębów i jest świetną przekąską o niskiej kaloryczności.',
    vetChecked: true
  },
  {
    id: '3',
    name: 'Czekolada',
    slug: 'czekolada',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Czekolada jest toksyczna dla psów. Zawiera teobrominę i kofeinę, które psy przetwarzają znacznie wolniej niż ludzie.',
    risks: 'Toksyczność czekolady może powodować wymioty, biegunkę, zwiększone pragnienie, niepokój, a w ciężkich przypadkach drgawki, problemy z sercem, a nawet śmierć. Czekolada gorzka i do pieczenia są najbardziej niebezpieczne ze względu na wyższe stężenie teobrominy.',
    vetChecked: true
  },
  {
    id: '4',
    name: 'Jabłko',
    slug: 'jablko',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Psy mogą jeść jabłka. Jest świetnym źródłem witamin A i C oraz błonnika. Należy tylko usunąć pestki i gniazdo nasienne.',
    benefits: 'Jabłko jest niskoproteinowe i niskotłuszczowe, co czyni je idealną przekąską dla starszych psów. Pomaga czyścić zęby i odświeża oddech.',
    risks: 'Usuń pestki i gniazdo nasienne, ponieważ zawierają niewielkie ilości cyjanku. Pokrój na małe kawałki, aby zapobiec zadławieniu.',
    vetChecked: true
  },
  {
    id: '5',
    name: 'Awokado',
    slug: 'awokado',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie. Chociaż miąższ może nie być toksyczny, awokado zawiera persynę, która może powodować problemy zdrowotne u psów.',
    risks: 'Pestka, skórka i liście zawierają persynę, która może powodować wymioty i biegunkę. Pestka stanowi również poważne ryzyko zadławienia.',
    vetChecked: true
  }
];