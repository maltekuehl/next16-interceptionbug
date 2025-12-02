const ModalPage = async (props: { params: Promise<{ slug: string }> }) => {

  const slug = (await props.params).slug;

  return (
    <div>
      Modal child page: {slug}
    </div>
  );
}

export default ModalPage;
