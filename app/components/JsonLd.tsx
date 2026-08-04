type JsonLdProps = {
  data: unknown;
  id?: string;
};

export function serializeJsonLd(data: unknown) {
  const serialized = JSON.stringify(data);

  if (serialized === undefined) {
    throw new TypeError("JSON-LD data must be JSON serializable.");
  }

  return serialized.replace(/</g, "\\u003c");
}

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
