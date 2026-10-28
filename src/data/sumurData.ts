/**
 * Discover Sumur - Main Structured Tourism Data
 * Contains accurate, respectful, and verified information for Sumur Village & Nubra Valley.
 * Contains editable fields for Stupa, Picnic Spot, Accommodation, and Contact.
 */

export interface AttractionData {
  id: string;
  name: string;
  subtitle: string;
  imageKey: string;
  isRegionalNearby?: boolean;
  isInSumur: boolean;
  location: string;
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  visitorGuidance?: string[];
  editableFields?: {
    verifiedName?: string;
    verifiedLocation?: string;
    verifiedDescription?: string;
    additionalInformation?: string;
    visitorGuidanceNote?: string;
  };
}

export interface CultureItem {
  id: string;
  title: string;
  subtitle: string;
  imageKey: string;
  description: string;
  keyAspects: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  iconName: 'temple' | 'mountain' | 'users' | 'compass';
  description: string;
  highlights: string[];
}

export interface AccommodationItem {
  id: string;
  propertyName: string;
  imageKey: string;
  location: string;
  statusNotice: string;
  facilities: string[];
  contactDetails: {
    phone: string;
    email: string;
    hostName?: string;
  };
  bookingLink: string;
  isVerified: boolean;
}

export interface NearbyDestination {
  id: string;
  name: string;
  type: 'Within Sumur Village' | 'Nearby Nubra Valley Destination';
  locationRelation: string;
  description: string;
  imageKey: string;
  badgeType: 'local' | 'regional';
}

export interface TourismGuideline {
  id: string;
  title: string;
  icon: 'temple' | 'trash' | 'camera' | 'home' | 'shield' | 'leaf';
  description: string;
  tips: string[];
}

// 1. Attractions Data
export const attractionsData: AttractionData[] = [
  {
    id: 'sumur-village',
    name: 'Sumur Village',
    subtitle: 'The Heart of Tranquility in Nubra',
    imageKey: 'sumurVillageLandscape',
    isInSumur: true,
    location: 'Sumur, Nubra Valley, Ladakh',
    shortDescription:
      'A peaceful mountain hamlet known for emerald barley fields, traditional mud-brick dwellings, serene orchards, and pure Himalayan air.',
    fullDescription: [
      'Nestled along the verdant eastern banks of the Nubra River beneath the dramatic ridgelines of the Karakoram range, Sumur is one of the most serene and culturally intact villages in Ladakh.',
      'Unlike more bustling transit hubs, Sumur retains its authentic pastoral rhythm. Here, traditional whitewashed Ladakhi farmsteads sit amidst terraced barley and wheat fields, bordered by tall poplars, willow groves, and golden sea buckthorn bushes fed by ancient glacial meltwater channels.',
      'Visitors can wander leisurely along tranquil village lanes, meet welcoming residents, and experience the timeless harmony between nature and high-altitude Buddhist culture.',
    ],
    keyHighlights: [
      'Serene, unhurried village atmosphere away from busy commercial corridors',
      'Terraced agriculture of barley, buckwheat, and apricot orchards',
      'Centuries-old stone water canals (yura) channeling pristine glacial streams',
      'Authentic Ladakhi rural architecture and warm community hospitality',
    ],
  },
  {
    id: 'samstanling-monastery',
    name: 'Samstanling Monastery (Gompa)',
    subtitle: 'Sacred 19th-Century Buddhist Sanctuary',
    imageKey: 'samstanlingMonastery',
    isInSumur: true,
    location: 'Upper Sumur, Nubra Valley, Ladakh',
    shortDescription:
      'An important Buddhist monastery associated with the Sumur area, known for its spiritual significance, intricate murals, and breathtaking mountain backdrop.',
    fullDescription: [
      'Samstanling Monastery, often called Samstanling Gompa, is the spiritual crown of Sumur village. Nestled against the rugged mountain slopes overlooking the village orchards, it was founded in the mid-19th century by Lama Tsultim Nima and belongs to the Gelugpa (Yellow Hat) school of Tibetan Buddhism.',
      'The monastery complex is distinguished by its vivid ochre, white, and deep red exterior walls, golden roof pinnacles, and vibrant prayer flags that ripple against the stark Karakoram sky.',
      'Inside the sacred prayer halls, visitors encounter venerable thangkas, beautifully preserved frescoes illustrating Buddhist cosmology and deities, statues of Maitreya Buddha, and the peaceful aroma of incense and juniper. The monastery grounds offer sweeping vistas across the entire Sumur basin and Nubra River.',
    ],
    keyHighlights: [
      'Foremost spiritual center of the Sumur community',
      'Historic prayer halls featuring traditional Buddhist murals and holy statues',
      'Peaceful mountain slope setting overlooking village orchards and willow groves',
      'Traditional monastic discipline and serene chanting during morning prayers',
    ],
    visitorGuidance: [
      'Dress modestly with shoulders and knees covered when entering monastic halls.',
      'Always remove shoes prior to stepping inside prayer sanctuaries.',
      'Circumambulate the monastery and prayer wheels in a clockwise direction.',
      'Speak softly and maintain silence during meditative periods and rituals.',
    ],
  },
  {
    id: 'buddha-stupa',
    name: 'Buddha Stupa (Chorten)',
    subtitle: 'Sacred Monument of Peace & Enlightenment',
    imageKey: 'buddhaStupa',
    isInSumur: true,
    location: 'Sumur Village, Nubra Valley, Ladakh',
    shortDescription:
      'A dedicated Buddhist stupa in Sumur symbolizing spiritual peace, mental clarity, and protection for the village community and travelers.',
    fullDescription: [
      'In Tibetan Buddhist cosmology, a Stupa (known locally in Ladakhi as a Chorten) is far more than an architectural landmark; it is a sacred physical representation of the enlightened mind of the Buddha and the five elemental cosmic principles: Earth, Water, Fire, Air, and Space.',
      'Erected at strategic junctions, hilltops, and village approaches, stupas serve as spiritual anchors that harmonize the landscape, dispel negativity, and bestow peace upon all sentient beings who pass by them with mindful intention.',
      'This dedicated section features the revered Buddha Stupa within Sumur, with editable fields reserved below for verified historical name, archival records, and community documentation.',
    ],
    keyHighlights: [
      'Sacred Buddhist architectural monument of peace and purification',
      'Symbolizes the Five Elements: Earth, Water, Fire, Air, and Infinite Space',
      'Surrounded by colorful prayer flags carrying mantras on the Himalayan breeze',
      'Revered community gathering point for circumambulation (Kora)',
    ],
    editableFields: {
      verifiedName: 'Buddha Stupa / Village Chorten (Sumur)',
      verifiedLocation: 'Sumur, Nubra Valley (Exact GPS pin can be linked)',
      verifiedDescription:
        'A tranquil Buddhist stupa situated within Sumur village, surrounded by high mountain vistas and venerated by local residents.',
      additionalInformation:
        'Detailed historical lineage, consecrated relics, and specific consecration dates will be updated here as verified records are confirmed by village elders and monastic archivists.',
    },
    visitorGuidance: [
      'Always walk clockwise (sunwise) around the Stupa to honor traditional Buddhist practice.',
      'Never climb upon, sit on, or deface the stupa base or decorative carvings.',
      'Carry back any personal items or litter to keep the sacred precinct pristine.',
    ],
  },
  {
    id: 'natural-landscapes',
    name: 'Natural Mountain Landscapes',
    subtitle: 'Where Glacier-Carved Ridges Meet Alpine Oasis',
    imageKey: 'naturalLandscapes',
    isInSumur: true,
    location: 'Surroundings of Sumur, Nubra Valley',
    shortDescription:
      'Surrounding mountain ranges, willow-fringed riverbeds, sweeping open valleys, and dramatic contrasts between high arid peaks and lush village greenery.',
    fullDescription: [
      'The geography surrounding Sumur is a masterclass in Himalayan geology. Situated at an elevation of approximately 3,100 meters (over 10,000 feet), the village rests in a fertile alluvial fan carved by glacial melt streams meeting the wide Nubra River basin.',
      'Towering overhead are the barren, sun-sculpted spires of the Karakoram and Ladakh ranges, displaying rich geological strata ranging from deep charcoal slate to golden sandstone and snow-crested summits.',
      'In stark and beautiful contrast to the towering desert peaks, the valley floor near Sumur blossoms with vibrant green willow groves, poplar rows, and dense thickets of sea buckthorn (Tsestalulu), creating a sanctuary for local birds and a haven of natural peace.',
    ],
    keyHighlights: [
      'Breathtaking panoramic vistas of the high Karakoram mountain range',
      'Pristine braided glacial river channels and tranquil mountain streams',
      'Striking juxtaposition of arid alpine desert and verdant oasis greenery',
      'Crystalline night skies with extraordinary stargazing and Milky Way clarity',
    ],
  },
  {
    id: 'sand-dunes-nubra',
    name: 'Hunder Sand Dunes (Nubra Valley)',
    subtitle: 'Nearby Regional Attraction · Cold-Desert Dunes',
    imageKey: 'hunderSandDunes',
    isRegionalNearby: true,
    isInSumur: false,
    location: 'Hunder, Nubra Valley (~40 km southwest of Sumur)',
    shortDescription:
      'The renowned high-altitude cold desert sand dunes of Hunder in the wider Nubra Valley, famed for rolling dunes and historic double-humped Bactrian camels.',
    fullDescription: [
      'IMPORTANT REGIONAL DISTINCTION: Hunder Sand Dunes are a celebrated regional attraction located in Hunder on the western side of Nubra Valley, approximately 40 to 45 kilometers from Sumur across the Shyok River confluence.',
      'These white-and-silver sand dunes present a surreal visual landscape—a windswept desert rolling across the valley floor directly framed by snow-covered mountain crags.',
      'Hunder is also famous as the habitat of the rare double-humped Bactrian camel, descendants of caravan pack animals that traversed the historic Silk Route between Yarkand, Central Asia, and Ladakh. Travelers based in peaceful Sumur frequently plan a day excursion to witness this iconic regional landmark.',
    ],
    keyHighlights: [
      'Nearby regional destination across the valley (not located within Sumur)',
      'High-altitude cold desert sand formations shaped by mountain winds',
      'Habitat of historic double-humped Bactrian camels of the ancient Silk Route',
      'Sensational golden-hour mountain light and twilight silhouettes',
    ],
  },
  {
    id: 'picnic-spot',
    name: 'Local Picnic Spot (Sumur)',
    subtitle: 'Tranquil Riverside Greenery & Willow Groves',
    imageKey: 'picnicSpot',
    isInSumur: true,
    location: 'Near Sumur Village, Nubra Valley',
    shortDescription:
      'A peaceful natural haven with shady willow and poplar trees, cool glacial water channels, and pristine outdoor surroundings for quiet reflection and family gatherings.',
    fullDescription: [
      'This dedicated section highlights the scenic local picnic retreat cherished by travelers and village residents near Sumur. Nestled beside crystalline glacial streams and shaded by ancient willow and poplar trees, it provides an idyllic outdoor respite.',
      'Here, the melodic sound of flowing mountain water and rustling leaves offers pure Himalayan calm. Travelers can relax amidst natural greenery with unobstructed views of the soaring mountains above.',
      'Editable fields are provided below to seamlessly incorporate the exact local place name, GPS pin, detailed landscape features, and community visitor guidelines once verified.',
    ],
    keyHighlights: [
      'Shaded natural groves of willow and tall poplar trees',
      'Adjacent to clean, cool mountain runoff channels and stream banks',
      'Peaceful open setting ideal for resting, reading, or quiet lunch stops',
      'Pure alpine atmosphere framed by Karakoram mountain peaks',
    ],
    editableFields: {
      verifiedName: 'Riverside Willow Picnic Grove (Sumur)',
      verifiedLocation: 'Sumur Village perimeter, near freshwater runoff channels',
      verifiedDescription:
        'A scenic and sheltered natural spot along the water channels near Sumur, providing cool shade and quiet surroundings.',
      visitorGuidanceNote:
        'Leave No Trace: All visitors are requested to pack out all packaging and waste. Never wash utensils or discard chemicals into the natural glacial water channels.',
    },
    visitorGuidance: [
      'Carry back all plastic, food wrappings, and non-biodegradable waste.',
      'Do not light open campfires without local community permission.',
      'Respect the tranquility of nearby wildlife and livestock grazing areas.',
    ],
  },
];

// 2. Cultural Heritage Pillars
export const culturePillars: CultureItem[] = [
  {
    id: 'traditions',
    title: 'Ladakhi Traditions',
    subtitle: 'Living Buddhist Faith & Community Harmony',
    imageKey: 'cultureTraditions',
    description:
      'Rooted deeply in Tibetan Buddhism, daily life in Sumur is infused with spiritual reverence. Colorful prayer flags (Lungta) flutter on rooftops, spinning prayer wheels send intentions of peace, and age-old communal values of mutual help (Bes) guide community cooperation during planting and harvesting.',
    keyAspects: [
      'Wind horse prayer flags (Lungta) carrying prayers across mountain valleys',
      'Community solidarity (Bes) where neighbors collaborate during seasonal farm tasks',
      'Traditional Losar (New Year) celebrations and monastic blessing ceremonies',
      'Respectful gestures including the universal Ladakhi greeting "Julley"',
    ],
  },
  {
    id: 'architecture',
    title: 'Traditional Architecture',
    subtitle: 'Eco-Responsive Himalayan Vernacular Design',
    imageKey: 'cultureArchitecture',
    description:
      'Sumur’s traditional homes are architectural marvels evolved specifically for Ladakh’s extreme high-altitude desert climate. Constructed from sun-dried earthen mud bricks, granite fieldstones, and sustainably harvested poplar and willow timbers, they stay naturally warm during bitter winters and cool during bright summers.',
    keyAspects: [
      'Thick sun-dried mud-brick walls providing exceptional thermal mass',
      'Flat timber-and-earth roofs used for sun drying apricots, herbs, and winter fodder',
      'Carved wooden window frames (Shingstok) painted with traditional motifs',
      'Upper-floor prayer room (Choshuk) maintained as a sacred sanctuary in every home',
    ],
  },
  {
    id: 'food',
    title: 'Local Food & Hospitality',
    subtitle: 'Wholesome High-Altitude Flavors & Warm Welcome',
    imageKey: 'cultureFoodHospitality',
    description:
      'Ladakhi culinary heritage centers around sustaining energy in high mountain conditions. Guests in Sumur are warmly welcomed with butter tea (Gur-gur chai) served from carved copper kettles, roasted barley flour (Tsampa), hearty noodle soups (Thukpa), hand-rolled pasta stew (Skyu), and organic apricot delicacies.',
    keyAspects: [
      'Gur-gur Chai: Traditional salted butter tea churned with milk and tea leaves',
      'Tsampa: Nutritious roasted highland barley flour, a staple of mountain diets',
      'Thukpa & Skyu: Hearty, comforting soups packed with root vegetables and herbs',
      'Organic apricot jams, sun-dried kernels, and vitamin-rich sea buckthorn juices',
    ],
  },
  {
    id: 'village-life',
    title: 'Village Life',
    subtitle: 'The Rhythms of High Himalayan Seasons',
    imageKey: 'cultureVillageLife',
    description:
      'Life in Sumur follows the natural clock of the sun and seasons. During the short Himalayan summer, families meticulously tend terraced barley fields nourished by glacial water channels. Autumn brings the harvest and apricot drying, while winter turns the village inward for contemplative gatherings, spinning wool, and storytelling by traditional hearths.',
    keyAspects: [
      'Glacial meltwater irrigation managed by traditional water masters (Churpon)',
      'Terraced farming of barley, peas, mustard greens, and organic root crops',
      'Gentle grazing of livestock on high summer pastures',
      'Intimate community bonds where elders, youth, and visitors interact with warmth',
    ],
  },
];

// 3. Visitor Experiences
export const visitorExperiences: ExperienceItem[] = [
  {
    id: 'exp-buddhist',
    title: 'Discover Buddhist Heritage',
    category: 'Spiritual Exploration',
    iconName: 'temple',
    description:
      'Immerse yourself in monastic tranquility at Samstanling Gompa, admire ancient murals, and experience the quiet contemplation of Sumur’s sacred stupas.',
    highlights: ['Monastic architecture', 'Ancient Buddhist frescoes', 'Sacred Chortens and prayer wheels'],
  },
  {
    id: 'exp-mountains',
    title: 'Enjoy Mountain Views',
    category: 'Scenic Landscapes',
    iconName: 'mountain',
    description:
      'Witness dramatic sunrises touching the jagged Karakoram peaks, stroll along crystalline river streams, and gaze at unpolluted starry night skies.',
    highlights: ['Karakoram mountain vistas', 'Braided Nubra river valley', 'World-class Himalayan stargazing'],
  },
  {
    id: 'exp-culture',
    title: 'Experience Local Culture',
    category: 'Authentic Heritage',
    iconName: 'users',
    description:
      'Learn about high-altitude agro-pastoral life, sample home-cooked Ladakhi butter tea, and discover the sustainable earthen architecture of Sumur.',
    highlights: ['Traditional Ladakhi homesteads', 'High-altitude organic farming', 'Warm community hospitality'],
  },
  {
    id: 'exp-nubra',
    title: 'Explore Nubra Valley',
    category: 'Regional Gateway',
    iconName: 'compass',
    description:
      'Use peaceful Sumur as an ideal home base to discover nearby regional wonders including Panamik Hot Springs, Diskit Monastery, and Hunder sand dunes.',
    highlights: ['Excursions to Panamik hot springs', 'Day trips across Nubra Valley', 'Tranquil base away from crowds'],
  },
];

// 4. Accommodation Cards
export const accommodationCards: AccommodationItem[] = [
  {
    id: 'acc-1',
    propertyName: 'Sumur Traditional Village Homestay',
    imageKey: 'homestay1',
    location: 'Central Sumur Village, Nubra Valley',
    statusNotice: 'Local accommodation information will be updated soon with verified host contacts.',
    facilities: ['Traditional Ladakhi Rooms', 'Home-cooked Meals', 'Mountain Views', 'Garden Setting'],
    contactDetails: {
      phone: 'To be announced',
      email: 'To be announced',
    },
    bookingLink: '#',
    isVerified: true,
  },
  {
    id: 'acc-2',
    propertyName: 'Green Valley Homestay (Sumur)',
    imageKey: 'homestay2',
    location: 'Sumur Village, near Apricot & Willow Groves',
    statusNotice: 'Local accommodation information will be updated soon with verified host contacts.',
    facilities: ['Garden Grounds', 'Organic Orchard Setting', 'Mountain Views', 'Home Dining'],
    contactDetails: {
      phone: 'To be announced',
      email: 'To be announced',
    },
    bookingLink: '#',
    isVerified: true,
  },
  {
    id: 'acc-3',
    propertyName: 'Sumur Mountain Retreat Lodge',
    imageKey: 'homestay3',
    location: 'Upper Sumur, near Samstanling Ridge',
    statusNotice: 'Local accommodation information will be updated soon with verified host contacts.',
    facilities: ['Panoramic Mountain Vista', 'Valley Panorama', 'Traditional Tea Lounge', 'Village Walks'],
    contactDetails: {
      phone: 'To be announced',
      email: 'To be announced',
    },
    bookingLink: '#',
    isVerified: true,
  },
];

// 5. Nearby Regional Destinations
export const nearbyDestinations: NearbyDestination[] = [
  {
    id: 'samstanling-local',
    name: 'Samstanling Monastery',
    type: 'Within Sumur Village',
    locationRelation: 'Located directly on the upper slopes of Sumur village',
    description:
      'The primary cultural monument in Sumur itself, offering peaceful monastic halls, vibrant murals, and commanding views over the village basin.',
    imageKey: 'samstanlingMonastery',
    badgeType: 'local',
  },
  {
    id: 'diskit-regional',
    name: 'Diskit Monastery & Maitreya Buddha',
    type: 'Nearby Nubra Valley Destination',
    locationRelation: 'Regional attraction across the valley (~35 km southwest of Sumur)',
    description:
      'The oldest and largest monastery in Nubra Valley, famous for its towering 32-meter colorful Maitreya Buddha statue gazing across the Shyok River.',
    imageKey: 'guideDiskit',
    badgeType: 'regional',
  },
  {
    id: 'hunder-regional',
    name: 'Hunder Sand Dunes',
    type: 'Nearby Nubra Valley Destination',
    locationRelation: 'Regional attraction beyond Diskit (~45 km from Sumur)',
    description:
      'High-altitude desert dunes rolling against jagged mountains, home to the historic double-humped Bactrian camels.',
    imageKey: 'hunderSandDunes',
    badgeType: 'regional',
  },
  {
    id: 'panamik-regional',
    name: 'Panamik Hot Springs',
    type: 'Nearby Nubra Valley Destination',
    locationRelation: 'Regional attraction further north up Nubra Valley (~24 km north of Sumur)',
    description:
      'Natural mineral-rich sulfur hot springs emerging from the mountain base along the route toward the Siachen region.',
    imageKey: 'guidePanamik',
    badgeType: 'regional',
  },
];

// 6. Responsible Tourism Guidelines
export const responsibleTourismGuidelines: TourismGuideline[] = [
  {
    id: 'monasteries',
    title: 'Respect Monasteries & Sacred Sites',
    icon: 'temple',
    description:
      'Monasteries and chortens are active places of worship and reflection. Always circumambulate religious monuments in a clockwise direction, remove your footwear before entering prayer halls, and maintain a quiet, reverent demeanor.',
    tips: [
      'Walk clockwise around stupas, prayer wheels, and mani stones',
      'Remove footwear and hats before entering prayer halls',
      'Dress modestly covering shoulders and knees',
    ],
  },
  {
    id: 'customs',
    title: 'Follow Local Customs & Traditions',
    icon: 'leaf',
    description:
      'Ladakh has rich social customs rooted in mutual respect. Greet locals with a warm "Julley" (which means hello, thank you, and goodbye), accept hospitality with both hands, and respect the conservative social ethos of village life.',
    tips: [
      'Use the respectful greeting "Julley" when meeting locals',
      'Receive food, tea, or gifts using both hands or right hand supported by left',
      'Avoid loud music or disruptive behavior in quiet village areas',
    ],
  },
  {
    id: 'clean-spots',
    title: 'Keep Picnic Spots Clean & Avoid Littering',
    icon: 'trash',
    description:
      'The high Himalayan ecosystem is fragile and waste degrades very slowly in the cold arid climate. Carry all wrappers, plastic bottles, and trash back with you to designated disposal points. Do not leave any trace behind in streams or willow groves.',
    tips: [
      'Carry a reusable water bottle and cloth trash bag',
      'Pack out all packaging, fruit peels, and trash',
      'Never discard waste into glacial runoff channels or rivers',
    ],
  },
  {
    id: 'photography',
    title: 'Ask Permission Before Photographing People',
    icon: 'camera',
    description:
      'Always seek courteous permission before photographing local villagers, monks, or children. Respect individual privacy and avoid invasive lenses. If someone declines, honor their wishes with a smile and a polite nod.',
    tips: [
      'Ask politely with a smile before pointing cameras at individuals',
      'Never take flash photography of monks in active prayer or ancient wall frescoes',
      'Do not offer money or sweets to children for photos',
    ],
  },
  {
    id: 'property',
    title: 'Respect Private Property & Village Communities',
    icon: 'home',
    description:
      'Sumur’s agricultural fields, stone walls, and irrigation canals are private livelihoods cultivated with immense labor. Stay on established footpaths, never trample crops, and do not pick fruit or flowers without explicit permission from owners.',
    tips: [
      'Stick to designated footpaths between fields and orchards',
      'Do not pluck apricots, apples, or sea buckthorn without asking',
      'Close village pasture gates if you open them while walking',
    ],
  },
  {
    id: 'safety',
    title: 'Follow Local Travel & Safety Guidance',
    icon: 'shield',
    description:
      'High altitude travel in Ladakh requires physiological discipline. Acclimatize thoroughly in Leh before crossing Khardung La. Stay hydrated, protect against intense ultraviolet sunlight, and observe local road and weather advisory notices.',
    tips: [
      'Rest 24–48 hours in Leh before traveling to Nubra Valley',
      'Drink plenty of water and carry sun protection and warm layers',
      'Adhere strictly to official travel advisories and permit terms',
    ],
  },
];
