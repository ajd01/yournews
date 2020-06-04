import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import sources from "../utils/source"

let active = false

export default function Overview() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await sources.getNews()
                active = true
                setData(response.data.articles)
            } catch (e) {
                console.log(e)
            }
        }
        if (!active) {
            fetchData()
        }
    }, [data])


    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            {
                data.map((article, i) => {
                    return (
                        <div key={i}>
                            <Text>{i} - {article.author}</Text>
                        </div>
                    )
                })
            }
        <Text>Hello!</Text>
        </View>
    );
}