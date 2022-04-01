import { Flex } from "@chakra-ui/react";
import { Card } from "../HotelCard/Card";

const favouriteList = [
  {
    images: [
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/dd25faec.jpg?impolicy=resizecrop&rw=598&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/c8b7c58e.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/1c8b133d.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/9f30adf4.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/35f415e9.jpg?impolicy=resizecrop&rw=297&ra=fit",
    ],
    id: "1",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.2130186418817!2d73.92099301432737!3d15.25617476476542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb5c35157ad0b%3A0xd1a37e617e85cae9!2sFairfield%20by%20Marriott%20Goa%20Benaulim!5e0!3m2!1sen!2sin!4v1648666656270!5m2!1sen!2sin",
    exploreArea: [
      {
        logo: "MdLocationOn",
        locationName: "Mobor Beach",
        distance: "58",
      },
      {
        logo: "MdLocationOn",
        locationName: "Holy Cross Chapel-Baradi",
        distance: "71",
      },
      {
        logo: "MdLocationOn",
        locationName: "Baina Beach",
        distance: "114",
      },
      {
        logo: "MdOutlineAirplanemodeActive",
        locationName: "Goa (GOI-Dabolim)",
        distance: "79",
      },
    ],
    hotelName: "Fairfield by Marriott Goa Benaulim",
    city: "Benaulim",
    shortDescription: "Effortlessly Romantic Beach Holiday",
    description:
      "Find the beauty of simplicity in South Goa. Fairfield by Marriott Goa Benaulim is minutes from the pure sands of Benaulim Beach.",
    refund: "Fully refundable",
    rating: "4.6",
    paymentMode: "Reserve now, pay later",
    review: "Wonderful",
    reviewCount: "11",
    roomsLeft: "5",
    offerPrice: "7499",
    originalPrice: "8399",
  },
  {
    images: [
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/dd25faec.jpg?impolicy=resizecrop&rw=598&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/c8b7c58e.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/1c8b133d.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/9f30adf4.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/35f415e9.jpg?impolicy=resizecrop&rw=297&ra=fit",
    ],
    id: "1",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.2130186418817!2d73.92099301432737!3d15.25617476476542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb5c35157ad0b%3A0xd1a37e617e85cae9!2sFairfield%20by%20Marriott%20Goa%20Benaulim!5e0!3m2!1sen!2sin!4v1648666656270!5m2!1sen!2sin",
    exploreArea: [
      {
        logo: "MdLocationOn",
        locationName: "Mobor Beach",
        distance: "58",
      },
      {
        logo: "MdLocationOn",
        locationName: "Holy Cross Chapel-Baradi",
        distance: "71",
      },
      {
        logo: "MdLocationOn",
        locationName: "Baina Beach",
        distance: "114",
      },
      {
        logo: "MdOutlineAirplanemodeActive",
        locationName: "Goa (GOI-Dabolim)",
        distance: "79",
      },
    ],
    hotelName: "Fairfield by Marriott Goa Benaulim",
    city: "Benaulim",
    shortDescription: "Effortlessly Romantic Beach Holiday",
    description:
      "Find the beauty of simplicity in South Goa. Fairfield by Marriott Goa Benaulim is minutes from the pure sands of Benaulim Beach.",
    refund: "Fully refundable",
    rating: "4.6",
    paymentMode: "Reserve now, pay later",
    review: "Wonderful",
    reviewCount: "11",
    roomsLeft: "5",
    offerPrice: "7499",
    originalPrice: "8399",
  },
  {
    images: [
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/dd25faec.jpg?impolicy=resizecrop&rw=598&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/c8b7c58e.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/1c8b133d.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/9f30adf4.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/35f415e9.jpg?impolicy=resizecrop&rw=297&ra=fit",
    ],
    id: "1",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.2130186418817!2d73.92099301432737!3d15.25617476476542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb5c35157ad0b%3A0xd1a37e617e85cae9!2sFairfield%20by%20Marriott%20Goa%20Benaulim!5e0!3m2!1sen!2sin!4v1648666656270!5m2!1sen!2sin",
    exploreArea: [
      {
        logo: "MdLocationOn",
        locationName: "Mobor Beach",
        distance: "58",
      },
      {
        logo: "MdLocationOn",
        locationName: "Holy Cross Chapel-Baradi",
        distance: "71",
      },
      {
        logo: "MdLocationOn",
        locationName: "Baina Beach",
        distance: "114",
      },
      {
        logo: "MdOutlineAirplanemodeActive",
        locationName: "Goa (GOI-Dabolim)",
        distance: "79",
      },
    ],
    hotelName: "Fairfield by Marriott Goa Benaulim",
    city: "Benaulim",
    shortDescription: "Effortlessly Romantic Beach Holiday",
    description:
      "Find the beauty of simplicity in South Goa. Fairfield by Marriott Goa Benaulim is minutes from the pure sands of Benaulim Beach.",
    refund: "Fully refundable",
    rating: "4.6",
    paymentMode: "Reserve now, pay later",
    review: "Wonderful",
    reviewCount: "11",
    roomsLeft: "5",
    offerPrice: "7499",
    originalPrice: "8399",
  },
  {
    images: [
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/dd25faec.jpg?impolicy=resizecrop&rw=598&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/c8b7c58e.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/1c8b133d.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/9f30adf4.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/35f415e9.jpg?impolicy=resizecrop&rw=297&ra=fit",
    ],
    id: "1",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.2130186418817!2d73.92099301432737!3d15.25617476476542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb5c35157ad0b%3A0xd1a37e617e85cae9!2sFairfield%20by%20Marriott%20Goa%20Benaulim!5e0!3m2!1sen!2sin!4v1648666656270!5m2!1sen!2sin",
    exploreArea: [
      {
        logo: "MdLocationOn",
        locationName: "Mobor Beach",
        distance: "58",
      },
      {
        logo: "MdLocationOn",
        locationName: "Holy Cross Chapel-Baradi",
        distance: "71",
      },
      {
        logo: "MdLocationOn",
        locationName: "Baina Beach",
        distance: "114",
      },
      {
        logo: "MdOutlineAirplanemodeActive",
        locationName: "Goa (GOI-Dabolim)",
        distance: "79",
      },
    ],
    hotelName: "Fairfield by Marriott Goa Benaulim",
    city: "Benaulim",
    shortDescription: "Effortlessly Romantic Beach Holiday",
    description:
      "Find the beauty of simplicity in South Goa. Fairfield by Marriott Goa Benaulim is minutes from the pure sands of Benaulim Beach.",
    refund: "Fully refundable",
    rating: "4.6",
    paymentMode: "Reserve now, pay later",
    review: "Wonderful",
    reviewCount: "11",
    roomsLeft: "5",
    offerPrice: "7499",
    originalPrice: "8399",
  },
  {
    images: [
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/dd25faec.jpg?impolicy=resizecrop&rw=598&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/c8b7c58e.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/1c8b133d.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/9f30adf4.jpg?impolicy=resizecrop&rw=297&ra=fit",
      "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/35f415e9.jpg?impolicy=resizecrop&rw=297&ra=fit",
    ],
    id: "1",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.2130186418817!2d73.92099301432737!3d15.25617476476542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb5c35157ad0b%3A0xd1a37e617e85cae9!2sFairfield%20by%20Marriott%20Goa%20Benaulim!5e0!3m2!1sen!2sin!4v1648666656270!5m2!1sen!2sin",
    exploreArea: [
      {
        logo: "MdLocationOn",
        locationName: "Mobor Beach",
        distance: "58",
      },
      {
        logo: "MdLocationOn",
        locationName: "Holy Cross Chapel-Baradi",
        distance: "71",
      },
      {
        logo: "MdLocationOn",
        locationName: "Baina Beach",
        distance: "114",
      },
      {
        logo: "MdOutlineAirplanemodeActive",
        locationName: "Goa (GOI-Dabolim)",
        distance: "79",
      },
    ],
    hotelName: "Fairfield by Marriott Goa Benaulim",
    city: "Benaulim",
    shortDescription: "Effortlessly Romantic Beach Holiday",
    description:
      "Find the beauty of simplicity in South Goa. Fairfield by Marriott Goa Benaulim is minutes from the pure sands of Benaulim Beach.",
    refund: "Fully refundable",
    rating: "4.6",
    paymentMode: "Reserve now, pay later",
    review: "Wonderful",
    reviewCount: "11",
    roomsLeft: "5",
    offerPrice: "7499",
    originalPrice: "8399",
  },
];
function Favourite() {
  return (
    <Flex justify="center" gap={5} flexWrap="wrap">
      {favouriteList.map((e) => (
        <Card key={e.id} data={e} />
      ))}
    </Flex>
  );
}

export default Favourite;
