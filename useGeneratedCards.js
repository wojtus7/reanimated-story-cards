export default function useGeneratedCards() {
  const Cards = [
    {
      question: 'Something something super something1',
      leftText: 'asdasd',
      rightText: 'asdasdas',
      image: 'https://image.flaticon.com/icons/png/512/3479/3479910.png',
      background: '#ccc',
    },
    {
      question: 'Something something super something2',
      leftText: 'fdgfdgdfg',
      rightText: 'dfghdfghdfg',
      image: 'https://image.flaticon.com/icons/png/512/3483/3483016.png',
      background: '#ccc',
    },
    {
      question: 'Something something super something3',
      leftText: 'dfghdfghd',
      rightText: 'dfghdfghd',
      image: 'https://image.flaticon.com/icons/png/512/3479/3479874.png',
      background: '#ccc',
    },
    {
      question: 'Something something super something4',
      leftText: 'asdfasdfasdf',
      rightText: 'asdfasdfasdf',
      image: 'https://image.flaticon.com/icons/png/512/3479/3479972.png',
      background: '#ccc',
    },
    {
      question: 'Something something super something5',
      leftText: 'asdfasdfasdfa',
      rightText: 'asdfasdfasdf',
      image: 'https://image.flaticon.com/icons/png/512/3480/3480000.png',
      background: '#ccc',
    },
  ];

  const getCardByIndex = (index) => {
    return Cards[index % 5];
  };

  return {
    Cards,
    getCardByIndex,
  };
}
