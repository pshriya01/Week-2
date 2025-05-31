const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const OutputArray = people.map((ele) => {
  const { name, address } = ele;
  const { city, street } = address;
  const { name: streetName } = street;
  return `${name} lives in ${city} on ${streetName}`;
});

console.log(OutputArray);
