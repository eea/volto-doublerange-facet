export const doubleRangeFacetSchemaEnhancer = ({ schema, formData }) => {
  // adds (enables) the 'multiple' field after the 'type' dropdown
  let { fields } = schema.fieldsets[0];
  const pos = fields.indexOf('type') + 1;
  fields = [
    ...fields.slice(0, pos),
    'step',
    ...fields.slice(pos, fields.length),
  ];
  schema.properties = {
    ...schema.properties,
    multiple: {
      ...schema.properties.multiple,
      default: true,
    },
    step: { title: 'Step', type: 'number', default: 1 },
  };
  schema.fieldsets[0].fields = fields;
  return schema;
};
