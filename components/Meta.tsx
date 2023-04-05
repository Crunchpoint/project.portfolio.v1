import Head from "next/head";

type MetaProps = {
  title: string;
  name: string;
  description: string;
};

export default function Meta({ title, name, description }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={description} />
      <link rel='icon' href='/src/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
  );
}
