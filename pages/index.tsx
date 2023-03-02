import type { NextPage } from "next";
import { colors, mixins, typography, utils } from "@styles/shared";
import { Button, Card, IconBox, Input, TextArea } from "@components/shared";
import { NOOB } from "@constants/Noob";
import { icons } from "public/icons";
import CheckBox from "@components/shared/Checkbox";
import { useState } from "react";

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <main css={[utils.pt(70), utils.pr(70), utils.pb(70), utils.pl(70)]}>
      <h1 css={typography.SUB_HEADING_32}>Welcome</h1>
      <Button onClick={NOOB} type="primary" style={utils.mr(4)}>
        start-game
      </Button>
      <Button onClick={NOOB} type="default" style={utils.mr(4)}>
        start-game
      </Button>
      <Button onClick={NOOB} type="ghost" style={utils.mr(4)}>
        start-game
      </Button>
      <div
        css={[
          mixins.flexAlignItemsStart,
          {
            gap: "10px",
          },
        ]}
      >
        <Card
          coverBg="/images/card_backgroud01.png"
          description="Duis aute irure dolor in velit esse cillum dolore."
          style={utils.mt(10)}
          cta={{ text: "view-project", onClick: NOOB }}
          floatingIcon={
            <IconBox icon={icons.ic_react} bgColor={colors.TEMPORARY_CYAN} />
          }
        />
        <Card
          coverBg="/images/tree-736885__480.jpg"
          description="Duis aute irure dolor in velit esse cillum dolore. Duis aute irure dolor in velit esse cillum dolore."
          style={utils.mt(10)}
          cta={{ text: "view-project", onClick: NOOB }}
          floatingIcon={
            <IconBox icon={icons.ic_html} bgColor={colors.TEMPORARY_ORANGE} />
          }
        />
      </div>
      <CheckBox
        onChange={(val, checked) => {
          console.log(val, checked);
        }}
        value="test"
        style={utils.mt(10)}
        label={
          <IconBox icon={icons.ic_html} bgColor={colors.TEMPORARY_ORANGE} />
        }
      />

      <Input
        placeholder="Enter Name"
        label="_name:"
        value={inputValue}
        onChange={(value) => {
          setInputValue(value as string);
        }}
      />
      <TextArea
        placeholder="Enter Message"
        label="_message:"
        value={inputValue}
        onChange={(value) => {
          setInputValue(value as string);
        }}
      />
    </main>
  );
};

export default Home;
