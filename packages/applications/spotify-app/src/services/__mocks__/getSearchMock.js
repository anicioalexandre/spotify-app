const QUERY_BEATLES_MOCK = {
  albums: {
    items: [
      {
        id: '1vANZV20H5B4Fk6yf7Ot9a',
        images: [
          {},
          {
            url:
              'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
          }
        ],
        name: 'Beatles For Sale (Remastered)',
        artists: [{ name: 'The Beatles' }]
      },
      {
        id: '1klALx0u4AavZNEvC4LrTL',
        images: [
          {},
          {
            url:
              'https://i.scdn.co/image/ab67616d00001e024ce8b4e42588bf18182a1ad2'
          }
        ],
        name: 'The Beatles (Remastered)',
        artists: [{ name: 'The Beatles' }]
      },
      {
        id: '0ETFjACtuP2ADo6LFhL6HN',
        images: [
          {},
          {
            url:
              'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
          }
        ],
        name: 'Abbey Road (Remastered)',
        artists: [{ name: 'The Beatles' }]
      }
    ]
  },
  tracks: {
    items: [
      {
        album: {
          id: '0ETFjACtuP2ADo6LFhL6HN',
          images: [
            {},
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
            }
          ]
        },
        artists: [{ name: 'The Beatles' }],
        id: '6dGnYIeXmHdcikdzNNDMm2',
        name: 'Here Comes The Sun - Remastered 2009'
      },
      {
        album: {
          id: '5v6iBhIlflzR9rEd1LAMbd',
          images: [
            {},
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e02881fb62d913fe712fc2e1c95'
            }
          ]
        },
        artists: [{ name: 'Rae Sremmurd' }],
        id: '6fujklziTHa8uoM5OQSfIo',
        name: 'Black Beatles'
      },
      {
        album: {
          id: '0ETFjACtuP2ADo6LFhL6HN',
          images: [
            {},
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
            }
          ]
        },
        artists: [{ name: 'The Beatles' }],
        id: '2EqlS6tkEnglzr7tkKAAYD',
        name: 'Come Together - Remastered 2009'
      }
    ]
  }
}

const QUERY_BOB_MOCK = {
  albums: {
    items: [
      {
        id: '1vANZV20H5B4Fk6yf7Ot9a',
        images: [
          {},
          {
            url:
              'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
          }
        ],
        name: 'BOB',
        artists: [{ name: 'BOB' }]
      },
      {
        id: '1klALx0u4AavZNEvC4LrTL',
        images: [
          {},
          {
            url:
              'https://i.scdn.co/image/ab67616d00001e024ce8b4e42588bf18182a1ad2'
          }
        ],
        name: 'BOB',
        artists: [{ name: 'BOB' }]
      },
      {
        id: '0ETFjACtuP2ADo6LFhL6HN',
        images: [
          {},
          {
            url:
              'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
          }
        ],
        name: 'BOB',
        artists: [{ name: 'BOB' }]
      }
    ]
  },
  tracks: {
    items: [
      {
        album: {
          id: '0ETFjACtuP2ADo6LFhL6HN',
          images: [
            {},
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
            }
          ]
        },
        artists: [{ name: 'BOB' }],
        id: '6dGnYIeXmHdcikdzNNDMm2',
        name: 'BOB'
      },
      {
        album: {
          id: '5v6iBhIlflzR9rEd1LAMbd',
          images: [
            {},
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e02881fb62d913fe712fc2e1c95'
            }
          ]
        },
        artists: [{ name: 'BOB' }],
        id: '6fujklziTHa8uoM5OQSfIo',
        name: 'BOB'
      },
      {
        album: {
          id: '0ETFjACtuP2ADo6LFhL6HN',
          images: [
            {},
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
            }
          ]
        },
        artists: [{ name: 'BOB' }],
        id: '2EqlS6tkEnglzr7tkKAAYD',
        name: 'BOB'
      }
    ]
  }
}

module.exports = { QUERY_BEATLES_MOCK, QUERY_BOB_MOCK }
