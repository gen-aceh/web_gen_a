const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>This is page for : {params.id}</div>
  )
}

export default Page