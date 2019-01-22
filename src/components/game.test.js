import React from "react";
import { mount, shallow } from "enzyme";

import Game from "./game";

describe("<Game />", () => {
  const shallowGame = shallow(<Game />);
  const mountGame = mount(<Game />);
  it("renders without crashing", () => {
    shallowGame;
  });

  it("starts the game with a random number, from 1 to 100", () => {
    expect(shallowGame.state().target).toBeGreaterThan(0);
    expect(shallowGame.state().target).toBeLessThan(101);
  });

  it("starts the game with an empty list of guesses", () => {
    expect(shallowGame.state().guesses).toEqual([]);
  });

  it("starts the game with simple instructions in the feedback", () => {
    expect(shallowGame.state().feedback).toEqual(
      "Make your guess. The history of your moves will appear below."
    );
  });

  it("resets state when clicking the `New Game` button", () => {
    mountGame.find(".btn-reset").simulate("click");
    expect(mountGame.state().target).toBeGreaterThan(0);
    expect(mountGame.state().target).toBeLessThan(101);
    expect(mountGame.state().guesses).toEqual([]);
    expect(mountGame.state().feedback).toEqual(
      "New target number selected. Make your guess."
    );
  });

  describe("has needed class based on distance from target", () => {
    beforeEach(() => {
      mountGame.setState({ target: 100, guesses: [] });
    });

    it("handles distance >=96", () => {
      mountGame.instance().handleFormSubmit(1);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-9")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Oxygen freezes");
    });

    it("handles distance >= 91 and <= 95", () => {
      mountGame.instance().handleFormSubmit(7);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-8")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Oxygen liquifies");
    });

    it("handles distance >= 86 and <= 90", () => {
      mountGame.instance().handleFormSubmit(12);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-7")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Carbon dioxide freezes");
    });

    it("handles distance >= 81 and <= 85", () => {
      mountGame.instance().handleFormSubmit(17);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-6")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Hands and face numb");
    });

    it("handles distance >= 76 and <= 80", () => {
      mountGame.instance().handleFormSubmit(22);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-5")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Water freezes");
    });

    it("handles distance >= 71 and <= 75", () => {
      mountGame.instance().handleFormSubmit(27);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-4")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Winter wind");
    });

    it("handles distance >= 66 and <= 70", () => {
      mountGame.instance().handleFormSubmit(32);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-3")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Autumn breeze");
    });

    it("handles distance >= 61 and <= 65", () => {
      mountGame.instance().handleFormSubmit(37);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-2")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Rather chilly");
    });

    it("handles distance >= 56 and <= 60", () => {
      mountGame.instance().handleFormSubmit(42);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-1")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Slightly cool");
    });

    it("handles distance >= 51 and <= 55", () => {
      mountGame.instance().handleFormSubmit(47);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--neutral")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Room temperature");
    });

    it("handles distance >= 46 and <= 50", () => {
      mountGame.instance().handleFormSubmit(52);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-1")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Slightly warm");
    });

    it("handles distance >= 41 and <= 45", () => {
      mountGame.instance().handleFormSubmit(57);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-2")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Summer breeze");
    });

    it("handles distance >= 36 and <= 40", () => {
      mountGame.instance().handleFormSubmit(62);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-3")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Rather heated");
    });

    it("handles distance >= 31 and <= 35", () => {
      mountGame.instance().handleFormSubmit(67);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-4")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Desert wind");
    });

    it("handles distance >= 26 and <= 30", () => {
      mountGame.instance().handleFormSubmit(72);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-5")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Water boils");
    });

    it("handles distance >= 21 and <= 25", () => {
      mountGame.instance().handleFormSubmit(77);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-6")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Paper catches fire");
    });

    it("handles distance >= 16 and <= 20", () => {
      mountGame.instance().handleFormSubmit(82);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-7")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Lead melts");
    });

    it("handles distance >= 11 and <= 15", () => {
      mountGame.instance().handleFormSubmit(87);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-8")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Lava boils");
    });

    it("handles distance >= 6 and <= 10", () => {
      mountGame.instance().handleFormSubmit(92);
      mountGame.update();
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-9")).toEqual(
        true
      );
      expect(mountGame.state().feedback).toEqual("Iron boils");
    });

    it("handles distance = 5", () => {
      mountGame.instance().handleFormSubmit(95);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-5")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Center of the Earth");
    });

    it("handles distance = 4", () => {
      mountGame.instance().handleFormSubmit(96);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-4")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Surface of the Sun");
    });

    it("handles distance = 3", () => {
      mountGame.instance().handleFormSubmit(97);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-3")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Center of the Sun");
    });

    it("handles distance = 2", () => {
      mountGame.instance().handleFormSubmit(98);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-2")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Nova heat!");
    });

    it("handles distance = 1", () => {
      mountGame.instance().handleFormSubmit(99);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-1")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual("Supernova explosion!");
    });

    it("handles distance = 0", () => {
      mountGame.instance().handleFormSubmit(100);
      mountGame.update();
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-0")
      ).toEqual(true);
      expect(mountGame.state().feedback).toEqual(
        "You WON! You did it in 1 move."
      );
    });
  });
});
