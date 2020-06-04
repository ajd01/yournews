import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import sources from "../utils/source"
import HeadLine from "./HeadLine"

let active = false

export default function Overview() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await sources.getNews()
                active = true
                if (response.data.articles && response.data.articles) {
                    console.log(response.data.articles)
                    setData(response.data.articles)
                }
            } catch (e) {
                console.log(e)
            }
        }
        if (!active) {
            fetchData()
        }
    }, [data])

    const loading = (
        <Text>Loadign...</Text>
    )

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            {
                data.length > 0 ?
                    data.map((article, id) => {
                        return (
                            <div key={id}>
                                <HeadLine article={ article }/>
                            </div>
                        )
                    })
                : loading
            }
        
        </View>
    );
    
}