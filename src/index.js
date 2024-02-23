import DoubleRangeFacet from './components/facets/DoubleRangeFacet';
import DoubleRangeFacetFilterListEntry from './components/facets/DoubleRangeFacetFilterListEntry';
const applyConfig = (config) => {
  config.blocks.blocksConfig.search.extensions.facetWidgets.types = [
    ...config.blocks.blocksConfig.search.extensions.facetWidgets.types,
    {
      id: 'doubleRangeFacet',
      title: 'Double Range',
      view: DoubleRangeFacet,
      isDefault: false,
      schemaEnhancer: DoubleRangeFacet.schemaEnhancer,
      stateToValue: DoubleRangeFacet.stateToValue,
      valueToQuery: DoubleRangeFacet.valueToQuery,
      filterListComponent: DoubleRangeFacetFilterListEntry,
    },
  ];
  return config;
};

export default applyConfig;
