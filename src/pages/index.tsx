import Card from "@/components/Card";
import Page from "@/components/Page";

export default function Home() {
  return (
    <Page>
      <h1 className="title-big">Exemplo de Organização</h1>
      <div className="flex flex-wrap gap-5 mt-20">
        <Card>Conteúdo #01</Card>
        <Card>Conteúdo #02</Card>
        <Card>Conteúdo #03</Card>
        <Card>
          <h1>Título #04</h1>
          <div>Conteúdo #04</div>
          <div>Fim</div>
        </Card>
      </div>
    </Page>
  )
}
