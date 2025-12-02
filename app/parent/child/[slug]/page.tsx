const NormalPage = async (props: { params: Promise<{ slug: string }> }) => {

  const slug = (await props.params).slug;

  return (
    <div>
      Normal child page: {slug}
    </div>
  );
}

export default NormalPage;
