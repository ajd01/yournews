import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import sources from '../utils/source'
import HeadLine from './HeadLine'
import { Context } from '../store'
import Loading from './Loading'

let active = false

export default function Overview () {
  const { store, dispatch } = useContext(Context)

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await sources.getNews()
        active = true
        if (response.data.articles && response.data.articles) {
          dispatch({ type: 'setData', data: response.data.articles })
        }
        // const data = [{ source: { id: 'cnn', name: 'CNN' }, author: 'Chloe Melas, CNN', title: "Nick Cordero's wife reveals he's 'still fighting' despite being told to say 'goodbye' - CNN", description: "Nick Cordero's wife, Amanda Kloots, is not giving up on him.", url: 'https://www.cnn.com/2020/06/03/entertainment/nick-cordero-wife-told-to-say-goodbye/index.html', urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/200523112239-02-nick-cordero-super-tease.jpg', publishedAt: '2020-06-04T02:25:00Z', content: null }, { source: { id: null, name: 'New York Times' }, author: 'Bryant Rousseau', title: 'For Hong Kong, Tiananmen Looms Over the Future - The New York Times', description: 'In early 1989, change seemed unstoppable in Beijing. That it wasn’t, that China would push back with fury, casts a large shadow over Hong Kong today.', url: 'https://www.nytimes.com/2020/06/03/world/asia/tiananmen-anniversary-photos.html', urlToImage: 'https://static01.nyt.com/images/2020/03/06/world/03hk-tiananmen-FADER-image/03hk-tiananmen-FADER-image-facebookJumbo.jpg', publishedAt: '2020-06-04T01:51:19Z', content: 'The day after the crackdown produced one of the most indelible images in the history of visual journalism: a lone man in a white shirt standing in the way of four tanks.\r\nAt the Hong Kong vigils that… [+921 chars]' }, { source: { id: null, name: 'New York Times' }, author: 'The New York Times', title: 'Protests Tonight in Photos and Video: Tensions Rise in New York After Curfew - The New York Times', description: 'Our reporters and photographers are on the ground at protests in cities across the country. Here’s what they’re seeing.', url: 'https://www.nytimes.com/live/2020/george-floyd-protests-photos-videos-06-03', urlToImage: 'https://static01.nyt.com/images/2020/06/03/nyregion/03blog-hpfaderMANHATTANnew1/03blog-hpfaderMANHATTANnew1-articleLarge.jpg', publishedAt: '2020-06-04T01:45:12Z', content: 'June 3, 2020, 9:39 p.m. ET\r\nJune 3, 2020, 9:39 p.m. ETByThomas Fuller\r\nCredit...Noah Berger/Associated Press\r\nI met two men at a protest in San Franciscos Mission district who said joining the demons… [+1318 chars]' }]
        // dispatch({ type: 'setData', data: data })
      } catch (e) {
        console.log(e)
      }
    }
    if (!active) {
      fetchData()
    }
  }, [data])

  const { data } = store
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        data.length > 0
          ? data.map((article, id) => {
            return (
              <div key={id}>
                <HeadLine article={article} id={id} />
              </div>
            )
          })
          : <Loading />
      }

    </View>
  )
}
