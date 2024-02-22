import { SelectFacetFilterListEntry } from '@plone/volto/components/manage/Blocks/Search/components';
import DoubleRangeFacet from './components/facets/DoubleRangeFacet';

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
      filterListComponent: SelectFacetFilterListEntry,
    },
  ];
  return config;
};

export default applyConfig;
