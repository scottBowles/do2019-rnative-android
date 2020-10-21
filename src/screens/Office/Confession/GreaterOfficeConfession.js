import React from "react";
import { Text, View } from "react-native";
import { H2, P, People, Rubric } from "styles/typography";

export const GreaterOfficeConfession = (props) => (
  <View>
    <H2>Confession of Sin</H2>
    <Invitation useLongForm={props.useLongFormInvitation} />
    <ConfessionOfSin />
    <Absolution useDeaconOrLayAbsolution={props.useDeaconOrLayAbsolution} />
  </View>
);

const longFormInvitation =
  "Dearly beloved, the Scriptures teach us to acknowledge our many sins and offenses, not concealing them from our heavenly Father, but confessing them with humble and obedient hearts that we may obtain forgiveness by his infinite goodness and mercy. We ought at all times humbly to acknowledge our sins before Almighty God, but especially when we come together in his presence to give thanks for the great benefits we have received at his hands, to declare his most worthy praise, to hear his holy Word, and to ask, for ourselves and on behalf of others, those things which are necessary for our life and our salvation. Therefore, draw near with me to the throne of heavenly grace.";

const shortFormInvitation = "Let us humbly confess our sins to Almighty God.";

const Invitation = ({ useLongForm = true, office }) => (
  <View>
    <Rubric>The Officiant says to the People</Rubric>
    <P>{useLongForm ? longFormInvitation : shortFormInvitation}</P>
  </View>
);

const ConfessionOfSin = () => (
  <View>
    <Rubric>Silence is kept. All kneeling, the Officiant and People say</Rubric>
    <People>Almighty and most merciful Father,</People>
    <People>we have erred and strayed from your ways like lost sheep.</People>
    <People>We have followed too much the devices and desires</People>
    <People>of our own hearts.</People>
    <People>We have offended against your holy laws.</People>
    <People>
      We have left undone those things which we ought to have done,
    </People>
    <People>and we have done those things which we ought not</People>
    <People>to have done;</People>
    <People>and apart from your grace, there is no health in us.</People>
    <People>O Lord, have mercy upon us.</People>
    <People>Spare all those who confess their faults.</People>
    <People>
      Restore all those who are penitent, according to your promises
    </People>
    <People>declared to all people in Christ Jesus our Lord.</People>
    <People>And grant, O most merciful Father, for his sake,</People>
    <People>that we may now live a godly, righteous, and sober life,</People>
    <People>to the glory of your holy Name. Amen.</People>
  </View>
);

const Absolution = ({ useDeaconOrLayAbsolution = true }) =>
  useDeaconOrLayAbsolution ? (
    <View>
      <Rubric>A Deacon or layperson remains kneeling and prays</Rubric>
      <Text>
        <P>
          Grant to your faithful people, merciful Lord, pardon and peace; that
          we may be cleansed from all our sins, and serve you with a quiet mind;
          through Jesus Christ our Lord.{" "}
        </P>
        <People>Amen.</People>
      </Text>
    </View>
  ) : (
    <View>
      <Rubric>The Priest alone stands and says</Rubric>
      <Text>
        <P>
          The Almighty and merciful Lord grant you absolution and remission of
          all your sins, true repentance, amendment of life, and the grace and
          consolation of his Holy Spirit.{" "}
        </P>
        <People>Amen.</People>
      </Text>
    </View>
  );
