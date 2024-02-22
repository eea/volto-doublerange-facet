import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Segment, Header } from 'semantic-ui-react';

import {
  selectFacetStateToValue,
  selectFacetValueToQuery,
} from '@plone/volto/components/manage/Blocks/Search/components/base';

import { doubleRangeFacetSchemaEnhancer } from './utils.js';

const DoubleRangeFacet = (props) => {
  const { facet, choices, onChange, value } = props;
  const facetValue = value;

  const convertToRange = (values) => {
    return {
      min: Math.min.apply(
        Math,
        values.map(function (o) {
          return o.value.replace(/[a-zA-Z]/, '');
        }),
      ),
      max: Math.max.apply(
        Math,
        values.map(function (o) {
          return o.value.replace(/[a-zA-Z]/, '');
        }),
      ),
    };
  };

  const startingValues = convertToRange(choices);

  const onChangeRange = (nValue, onChangeR, sValue) => {
    const fixedValue = {
      min: nValue.min < sValue.min ? sValue.min : nValue.min,
      max: nValue.max > sValue.max ? sValue.max : nValue.max,
    };
    onChangeR(
      facet.field.value,
      [...Array(fixedValue.max - fixedValue.min + 1).keys()].map((i) =>
        (i + fixedValue.min).toString(),
      ),
    );
  };

  return (
    <div className="range-facet">
      <Header as="h4">{facet.title ?? facet?.field?.label}</Header>
      <div className="range-facet-container">
        <InputRange
          minValue={startingValues.min}
          maxValue={startingValues.max}
          step={facet.step ? parseInt(facet.step) : 1}
          value={
            facetValue.length > 0 ? convertToRange(facetValue) : startingValues
          }
          onChange={(changedValue) =>
            onChangeRange(changedValue, onChange, startingValues)
          }
          formatLabel={(value) => {
            return value;
          }}
        />
      </div>
    </div>
  );
};

DoubleRangeFacet.schemaEnhancer = doubleRangeFacetSchemaEnhancer;

DoubleRangeFacet.stateToValue = selectFacetStateToValue;
DoubleRangeFacet.valueToQuery = selectFacetValueToQuery;

export default DoubleRangeFacet;
