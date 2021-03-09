export default function useGeneratedCards() {
  const Cards = [
    {
      question:
        'Wealthy lookning young man asks you to throw a party in your kingdom.',
      leftText: 'Deny the offer',
      onLeft: {happy: [], sad: ['joker']},
      rightText: 'Lets party!',
      onRight: {happy: ['joker'], sad: []},
      image: 'https://image.flaticon.com/icons/png/512/3479/3479910.png',
      background: '#ccc',
    },
    {
      question:
        'Hunter from the near village requests some help. It seems like his hometown is in danger',
      leftText: 'Let him fight alone',
      onLeft: {happy: [], sad: ['woman']},
      rightText: 'Send the troops',
      onRight: {happy: ['knight'], sad: []},
      image: 'https://image.flaticon.com/icons/png/512/3483/3483016.png',
      background: '#ccc',
    },
    {
      question: 'Your dauger wants a new pet.',
      leftText: 'Get her a cat',
      onLeft: {happy: ['woman'], sad: []},
      rightText: 'Get her a lion',
      onRight: {happy: ['joker'], sad: ['woman']},
      image: 'https://image.flaticon.com/icons/png/512/3479/3479874.png',
      background: '#ccc',
    },
    {
      question:
        'Knights are bored because there is no war so they start to rob nearby villages',
      leftText: 'Punish the knights',
      onLeft: {happy: ['woman'], sad: ['knight']},
      rightText: 'Ask them to bring you something nice',
      onRight: {happy: ['joker', 'knight'], sad: ['woman']},
      image: 'https://image.flaticon.com/icons/png/512/3479/3479972.png',
      background: '#ccc',
    },
    {
      question: 'Some overseas youngster seems to be a great warrior.',
      leftText: 'He is probably a spy. Kill him',
      onLeft: {happy: [], sad: ['woman']},
      rightText: 'Put him in the army ',
      onRight: {happy: ['knight'], sad: ['joker']},
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
