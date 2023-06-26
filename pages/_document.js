import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://cdn.tiny.cloud/1/qg0r5p4371d3r2v8ypb8nsduls2kusdwmhdoyyfgddjolw4c/tinymce/6/tinymce.min.js"
          referrerpolicy="origin"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
