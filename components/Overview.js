import React, { useContext, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
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
      <ScrollView>
        {
          data.length > 0
            ? data.map((article, id) => {
              return (
                <View key={id} style={{ flexDirection: 'row' }}>
                  <View>
                    <HeadLine article={article} id={id} />
                  </View>
                </View>
              )
            })
            : <Loading />
        }
      </ScrollView>
    </View>
  )
}
