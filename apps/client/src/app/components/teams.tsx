import * as React from 'react';
import * as ReactDnD from 'react-dnd';
import * as ReactDnDHTML5Backend from 'react-dnd-html5-backend';

import * as AppStateOrganization from '~client/app/store/organization';

import styled from 'styled-components';

import * as Team from './team';

type Props = {
  team: AppStateOrganization.State['tree'][number];
};

export const Component = (props: Props) => {
  return props.team.children.length < 0 ? (
    props.team.children.map((team) => (
      <ReactDnD.DndProvider backend={ReactDnDHTML5Backend.HTML5Backend}>
        <StyledTeamContainer>
          <Team.Component key={team.id} team={team} />
        </StyledTeamContainer>
      </ReactDnD.DndProvider>
    ))
  ) : (
    <StyledTeamContainer>
      <Team.Component key={props.team.id} team={props.team} />
    </StyledTeamContainer>
  );
};

const StyledTeamContainer = styled.div`
  display: flex;
`;

// import * as React from 'react';
// import * as ReactDnD from 'react-dnd';
// import * as ReactDnDHTML5Backend from 'react-dnd-html5-backend';
// import produce from 'immer';

// import styled from 'styled-components';

// import { mockData } from './mock-data';

// import * as Team from './team';
// import * as DropZone from './drop-zone';

// export const Component = () => {
//   const [teams, setTeams] = React.useState(mockData);

//   const moveTeam = React.useCallback(
//     (dragIndex: number, hoverIndex: number) => {
//       const dragTeam = teams[dragIndex];
//       setTeams(
//         produce(teams, (draft) => {
//           draft.splice(dragIndex, 1);
//           draft.splice(hoverIndex, 0, dragTeam);
//         })
//       );
//     },
//     [teams]
//   );

//   return (
//     <ReactDnD.DndProvider backend={ReactDnDHTML5Backend.HTML5Backend}>
//       <StyledTeamContainer>
//         {teams.map((team, index) => (
//           <Team.Component
//             key={team.teamName}
//             {...team}
//             index={index}
//             moveTeam={moveTeam}
//           />
//         ))}
//       </StyledTeamContainer>
//       <DropZone.Component />
//     </ReactDnD.DndProvider>
//   );
// };

// const StyledTeamContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;
