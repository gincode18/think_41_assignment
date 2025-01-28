export interface Property {
    id: number
    address: string
    type: string
    bedrooms: number
    bathrooms: number
    rent: number
    status: "available" | "rented"
    imageUrl: string
  }
  
  export const properties: Property[] = [
    {
      id: 1,
      address: "123 Main St, Anytown, USA",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 1,
      rent: 1200,
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      address: "456 Oak Ave, Somewhere, USA",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      rent: 1800,
      status: "rented",
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      address: "789 Pine Lane, Elsewhere, USA",
      type: "Townhouse",
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 1600,
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      address: "321 Cedar Road, Nowhere, USA",
      type: "Condo",
      bedrooms: 1,
      bathrooms: 1,
      rent: 1100,
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      address: "555 Maple Drive, Anywhere, USA",
      type: "House",
      bedrooms: 4,
      bathrooms: 3,
      rent: 2500,
      status: "rented",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      address: "777 Beach Blvd, Coastal City, USA",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      rent: 1700,
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      address: "888 Mountain View, Highland, USA",
      type: "Cabin",
      bedrooms: 3,
      bathrooms: 1,
      rent: 1400,
      status: "rented",
      imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      address: "999 Lake Road, Waterfront, USA",
      type: "House",
      bedrooms: 5,
      bathrooms: 3.5,
      rent: 3000,
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    }
]
  
  