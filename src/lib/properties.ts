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
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      address: "456 Oak Ave, Somewhere, USA",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      rent: 1800,
      status: "rented",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      address: "789 Pine Lane, Elsewhere, USA",
      type: "Townhouse",
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 1600,
      status: "available",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 4,
      address: "321 Cedar Road, Nowhere, USA",
      type: "Condo",
      bedrooms: 1,
      bathrooms: 1,
      rent: 1100,
      status: "available",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 5,
      address: "555 Maple Drive, Anywhere, USA",
      type: "House",
      bedrooms: 4,
      bathrooms: 3,
      rent: 2500,
      status: "rented",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 6,
      address: "777 Beach Blvd, Coastal City, USA",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      rent: 1700,
      status: "available",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 7,
      address: "888 Mountain View, Highland, USA",
      type: "Cabin",
      bedrooms: 3,
      bathrooms: 1,
      rent: 1400,
      status: "rented",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 8,
      address: "999 Lake Road, Waterfront, USA",
      type: "House",
      bedrooms: 5,
      bathrooms: 3.5,
      rent: 3000,
      status: "available",
      imageUrl: "https://via.placeholder.com/400x300",
    }
]
  
  