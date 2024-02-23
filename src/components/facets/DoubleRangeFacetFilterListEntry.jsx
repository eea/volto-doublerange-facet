import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

function DoubleRangeFacetFilterListEntry(props) {
  const { facet, isEditMode, setFacets, facets } = props;
  return typeof facets[facet] === 'string' ? (
    <Label size="small">
      {facets[facet]}
      <Icon
        name="delete"
        onClick={() => {
          !isEditMode &&
            setFacets({
              ...facets,
              [facet]: '',
            });
        }}
      />
    </Label>
  ) : (
    <>
      <Label size="small">
        {facets[facet][0]} - {facets[facet][facets[facet].length - 1]}
        <Icon
          name="delete"
          onClick={() => {
            !isEditMode &&
              setFacets({
                ...facets,
                [facet]: [],
              });
          }}
        />
      </Label>
    </>
  );
}

export default DoubleRangeFacetFilterListEntry;
