import Head from 'next/head'
import { Comic_Neue } from 'next/font/google'
import styled from 'styled-components'
import { Button } from '@/components/Button'

const comic = Comic_Neue({ weight: "300", subsets: ["latin"] })

const Text = styled.p`
  color: red;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 45%;

  gap: 10px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Stitches vs Styled Components</title>
        <meta name="description" content="O duelo do século" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={comic.className}>
        <Container>
          <Text>Hello, mundo</Text>
          <Button label="Styled" style='styled-component' />
          <Button label="Stitches" style='stitches' />
        </Container>
      </main>
    </>
  )
}
