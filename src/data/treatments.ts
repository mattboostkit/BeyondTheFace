import { Treatment } from '../types';
import exosomesImage from '../assets/images/Exosomes_2.jpg';
import exosomesWithMassageImage from '../assets/images/Exosomes.jpg';
import ledTherapyImage from '../assets/images/LED Light Therapy.jpg';
import environImage from '../assets/images/Environ.jpg?v=2';
import antiWrinkleImage from '../assets/images/Anti-Wrinkle Treatment.jpg';
import lipEnhancementImage from '../assets/images/Lip Enhancement.jpg';
import polynucleotidesImage from '../assets/images/Polynucleotides.jpg';
import profhiloImage from '../assets/images/Profhilo.jpg?v=2';

const placeholderImage = 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'; // Generic placeholder

export const treatments: Treatment[] = [
  {
    id: '4',
    name: 'Vivace RF Microneedling with Exosomes and Remedial Massage',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'Vivace RF with Exosomes, enhanced by a remedial massage, is the signature experience at Beyond the Face. This advanced treatment rejuvenates the skin, restoring a noticeably more youthful appearance. It is particularly effective for thin, sagging skin – especially around the lower face, jawline, and neck – helping to prevent further ageing by lifting, firming, and tightening the skin.',
    expectedResults: 'Reduced appearance of scars, wrinkles, and enlarged pores. Improved skin texture and firmness.',
    duration: '150 minutes',
    recovery: 'Immediate results. No downtime. Up to 24hrs slight redness',
    image: exosomesWithMassageImage
  },
  {
    id: '7',
    name: 'Vivace RF Microneedling with Exosomes',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'Vivace RF with Exosomes is a treatment that rejuvenates the skin, restoring a noticeably more youthful appearance. It is particularly effective for thin, sagging skin – especially around the lower face, jawline, and neck – helping to prevent further ageing by lifting, firming, and tightening the skin.',
    expectedResults: 'Reduced appearance of scars, wrinkles, and enlarged pores. Improved skin texture and firmness.',
    duration: '90 minutes',
    recovery: 'Immediate results. No downtime. Up to 24hrs slight redness',
    image: exosomesImage
  },
  { // Updated Chemical Peel to Environ Skin Peel
    id: '3',
    name: 'Environ Skin Peel', // Updated name
    category: 'Lifting and Tightening Skin Treatments',
    description: 'Environ’s pioneering Dual Electro-Sonic Technology sets the benchmark for professional skincare treatments. Low frequency Sonophoresis together with pulsed Iontophoresis in combination with Environ’s professional skincare formulations, help to deliver what skin needs, where it needs it most – making a real lasting difference.', // Updated description
    expectedResults: 'Improved skin texture, clarity, and radiance. Addresses specific skin concerns like ageing, pigmentation, or acne.', // Kept relevant expected results
    duration: '60-75 minutes', // Updated duration
    recovery: 'Minimal downtime, possible slight redness for a few hours.', // Updated recovery
    image: environImage
  },
  {
    id: '5',
    name: 'LED Light Therapy',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'LED Light Therapy\nLEM Low-Level Light Therapy Device\nThe LEM is an advanced LED therapy device featuring red, blue, and yellow light settings, which can be used individually or in combination. It serves as an effective adjunct treatment for a range of skin rejuvenation concerns, including acne, pigmentation issues, and wound healing. It is also beneficial in supporting hair regrowth therapies.',
    expectedResults: 'Improved skin tone, reduced inflammation, and accelerated healing. Best results after a series of treatments.',
    duration: '20 minutes',
    recovery: 'No downtime required.',
    image: ledTherapyImage
  },
  {
    id: '8',
    name: 'Remedial Massage',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'A therapeutic massage technique that focuses on treating injured, sore or dysfunctional muscles. This specialized massage helps to stimulate circulation, improve lymphatic drainage, and promote skin rejuvenation while providing deep relaxation and stress relief.',
    expectedResults: 'Improved circulation, reduced muscle tension, enhanced skin tone, and overall relaxation.',
    duration: '30 minutes',
    recovery: 'No downtime required. Drink plenty of water after treatment.',
    image: placeholderImage
  },
  {
    id: '1',
    name: 'Anti-Wrinkle Treatment',
    category: 'Injectables',
    description: 'This treatment works by relaxing specific facial muscles responsible for the formation of fine lines and wrinkles, particularly on the forehead and around the eyes. By reducing muscle movement in targeted areas, it helps create a smoother, more youthful appearance.',
    expectedResults: 'Visible reduction in fine lines and wrinkles, with results typically lasting 3–4 months.',
    duration: '30 minutes',
    recovery: 'No downtime required. Avoid lying down for 4 hours after treatment.',
    image: antiWrinkleImage
  },
  {
    id: '2',
    name: 'Dermal Fillers',
    category: 'Injectables',
    description: 'Dermal fillers are gel-like substances that are injected beneath the skin to restore lost volume, smooth lines, soften creases, or enhance facial contours.',
    expectedResults: 'Instantly restored volume and smoothed away facial wrinkles and folds. Results last 6-18 months depending on the area treated.',
    duration: '45 minutes',
    recovery: 'Common side effects: swelling, bruising, tenderness. Allow 4-7 days for healing and recovery.',
    image: placeholderImage
  },
  {
    id: '6',
    name: 'Lip Enhancement',
    category: 'Injectables',
    description: 'Lip fillers are injectable treatments that add volume to the lips, enhancing their shape, structure, and size.',
    expectedResults: 'Fuller, more defined lips with improved symmetry. Results last 6-12 months.',
    duration: '30 minutes',
    recovery: 'Common side effects: swelling, bruising, tenderness. Allow 4-7 days for healing and recovery.',
    image: lipEnhancementImage
  },
  {
    id: '9',
    name: 'Polynucleotides',
    category: 'Injectables',
    description: 'A rejuvenating injectable gel derived from fish DNA, designed for use on the face, neck, and décolletage. Polynucleotides work by stimulating fibroblasts in the skin to boost collagen and elastin production, promoting a radiant, youthful complexion.',
    expectedResults: 'Improved skin texture, increased hydration, and enhanced skin elasticity. Results develop over time and can last several months.',
    duration: '90 minutes',
    recovery: 'Slight swelling, tenderness, and light bruising from 24 hours to 4 days.',
    image: polynucleotidesImage
  },
  {
    id: '10',
    name: 'Profhilo',
    category: 'Injectables',
    description: 'Profhilo Structura is an injectable skin treatment designed to restore and reposition superficial fat to its natural state and counteract the natural loss of tissue that occurs with age. It lifts and contours the face to reduce pronounced hollows and altered facial contours from midface fat loss. By using hyaluronic acid (HA), Profhilo Structura hydrates the skin to improve its quality and elasticity.',
    expectedResults: 'Improved skin hydration, firmness, and elasticity with a more youthful appearance. Results typically last 6 months.',
    duration: '90 minutes',
    recovery: 'Minimal downtime, some light swelling could last up to 24 hours.',
    image: profhiloImage
  }
  // Removed duplicate Environ Skin Peel (id: '7')
];

export const categories = ['Lifting and Tightening Skin Treatments', 'Injectables'];