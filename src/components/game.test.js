import React from "react";
import { mount, shallow } from "enzyme";

import { Game } from "./game";
import { addGuess } from "../redux/actions";

describe("<Game />", () => {
  const shallowGame = shallow(<Game guesses={[]} dispatch={jest.fn()} />);
  const mountGame = mount(<Game guesses={[]} dispatch={jest.fn()} />);
  it("renders without crashing", () => {
    shallowGame;
  });

  it("starts the game with a random number, from 1 to 100", () => {
    mountGame.setProps({
      target: Math.floor(Math.random() * 100) + 1
    });
    expect(mountGame.props().target).toBeGreaterThan(0);
    expect(mountGame.props().target).toBeLessThan(101);
  });

  it("starts the game with an empty list of guesses", () => {
    mountGame.setProps({
      guesses: []
    });
    expect(mountGame.props().guesses).toEqual([]);
  });

  it("starts the game with simple instructions in the feedback", () => {
    mountGame.setProps({
      feedback: "Make your guess. The history of your moves will appear below."
    });
    expect(mountGame.props().feedback).toEqual(
      "Make your guess. The history of your moves will appear below."
    );
  });

  it("resets state when clicking the `New Game` button", () => {
    mountGame.setProps({
      feedback: "New target number selected. Make your guess."
    });
    mountGame.find(".btn-reset").simulate("click");
    expect(mountGame.props().target).toBeGreaterThan(0);
    expect(mountGame.props().target).toBeLessThan(101);
    expect(mountGame.props().guesses).toEqual([]);
    expect(mountGame.props().feedback).toEqual(
      "New target number selected. Make your guess."
    );
  });

  describe("has needed class based on distance from target", () => {
    beforeEach(() => {
      mountGame.setState({ target: 100, guesses: [] });
    });

    it("handles distance >=96", () => {
      mountGame.setProps({
        guesses: [{ number: 2, distance: 98, id: 25 }],
        target: 100,
        feedback: "Oxygen freezes"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-9")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Oxygen freezes");
    });

    it("handles distance >= 91 and <= 95", () => {
      mountGame.setProps({
        guesses: [{ number: 7, distance: 93, id: 24 }],
        target: 100,
        feedback: "Oxygen liquifies"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-8")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Oxygen liquifies");
    });

    it("handles distance >= 86 and <= 90", () => {
      mountGame.setProps({
        guesses: [{ number: 12, distance: 88, id: 23 }],
        target: 100,
        feedback: "Carbon dioxide freezes"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-7")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Carbon dioxide freezes");
    });

    it("handles distance >= 81 and <= 85", () => {
      mountGame.setProps({
        guesses: [{ number: 17, distance: 83, id: 22 }],
        target: 100,
        feedback: "Hands and face numb"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-6")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Hands and face numb");
    });

    it("handles distance >= 76 and <= 80", () => {
      mountGame.setProps({
        guesses: [{ number: 22, distance: 78, id: 21 }],
        target: 100,
        feedback: "Water freezes"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-5")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Water freezes");
    });

    it("handles distance >= 71 and <= 75", () => {
      mountGame.setProps({
        guesses: [{ number: 27, distance: 73, id: 20 }],
        target: 100,
        feedback: "Winter wind"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-4")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Winter wind");
    });

    it("handles distance >= 66 and <= 70", () => {
      mountGame.setProps({
        guesses: [{ number: 32, distance: 68, id: 19 }],
        target: 100,
        feedback: "Autumn breeze"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-3")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Autumn breeze");
    });

    it("handles distance >= 61 and <= 65", () => {
      mountGame.setProps({
        guesses: [{ number: 37, distance: 63, id: 18 }],
        target: 100,
        feedback: "Rather chilly"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-2")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Rather chilly");
    });

    it("handles distance >= 56 and <= 60", () => {
      mountGame.setProps({
        guesses: [{ number: 42, distance: 58, id: 17 }],
        target: 100,
        feedback: "Slightly cool"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--cold-1")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Slightly cool");
    });

    it("handles distance >= 51 and <= 55", () => {
      mountGame.setProps({
        guesses: [{ number: 47, distance: 53, id: 16 }],
        target: 100,
        feedback: "Room temperature"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--neutral")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Room temperature");
    });

    it("handles distance >= 46 and <= 50", () => {
      mountGame.setProps({
        guesses: [{ number: 52, distance: 48, id: 15 }],
        target: 100,
        feedback: "Slightly warm"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-1")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Slightly warm");
    });

    it("handles distance >= 41 and <= 45", () => {
      mountGame.setProps({
        guesses: [{ number: 57, distance: 43, id: 14 }],
        target: 100,
        feedback: "Summer breeze"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-2")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Summer breeze");
    });

    it("handles distance >= 36 and <= 40", () => {
      mountGame.setProps({
        guesses: [{ number: 62, distance: 38, id: 13 }],
        target: 100,
        feedback: "Rather heated"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-3")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Rather heated");
    });

    it("handles distance >= 31 and <= 35", () => {
      mountGame.setProps({
        guesses: [{ number: 67, distance: 33, id: 12 }],
        target: 100,
        feedback: "Desert wind"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-4")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Desert wind");
    });

    it("handles distance >= 26 and <= 30", () => {
      mountGame.setProps({
        guesses: [{ number: 72, distance: 28, id: 11 }],
        target: 100,
        feedback: "Water boils"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-5")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Water boils");
    });

    it("handles distance >= 21 and <= 25", () => {
      mountGame.setProps({
        guesses: [{ number: 77, distance: 23, id: 10 }],
        target: 100,
        feedback: "Paper catches fire"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-6")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Paper catches fire");
    });

    it("handles distance >= 16 and <= 20", () => {
      mountGame.setProps({
        guesses: [{ number: 82, distance: 18, id: 9 }],
        target: 100,
        feedback: "Lead melts"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-7")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Lead melts");
    });

    it("handles distance >= 11 and <= 15", () => {
      mountGame.setProps({
        guesses: [{ number: 87, distance: 13, id: 8 }],
        target: 100,
        feedback: "Lava boils"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-8")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Lava boils");
    });

    it("handles distance >= 6 and <= 10", () => {
      mountGame.setProps({
        guesses: [{ number: 92, distance: 8, id: 7 }],
        target: 100,
        feedback: "Iron boils"
      });
      expect(mountGame.find(".guess-box").hasClass("guess-box--hot-9")).toEqual(
        true
      );
      expect(mountGame.props().feedback).toEqual("Iron boils");
    });

    it("handles distance = 5", () => {
      mountGame.setProps({
        guesses: [{ number: 95, distance: 5, id: 6 }],
        target: 100,
        feedback: "Center of the Earth"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-5")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Center of the Earth");
    });

    it("handles distance = 4", () => {
      mountGame.setProps({
        guesses: [{ number: 96, distance: 4, id: 5 }],
        target: 100,
        feedback: "Surface of the Sun"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-4")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Surface of the Sun");
    });

    it("handles distance = 3", () => {
      mountGame.setProps({
        guesses: [{ number: 97, distance: 3, id: 4 }],
        target: 100,
        feedback: "Center of the Sun"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-3")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Center of the Sun");
    });

    it("handles distance = 2", () => {
      mountGame.setProps({
        guesses: [{ number: 98, distance: 2, id: 3 }],
        target: 100,
        feedback: "Nova heat!"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-2")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Nova heat!");
    });

    it("handles distance = 1", () => {
      mountGame.setProps({
        guesses: [{ number: 99, distance: 1, id: 2 }],
        target: 100,
        feedback: "Supernova explosion!"
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-1")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual("Supernova explosion!");
    });

    it("handles distance = 0", () => {
      mountGame.setProps({
        guesses: [{ number: 100, distance: 0, id: 1 }],
        target: 100,
        feedback: "You WON! You did it in 1 move."
      });
      expect(
        mountGame.find(".guess-box").hasClass("guess-box--superhot-0")
      ).toEqual(true);
      expect(mountGame.props().feedback).toEqual(
        "You WON! You did it in 1 move."
      );
    });
  });
});

describe("addGuess", () => {
  it("dispatches addGuess from actions", () => {
    const guess = 25;
    const action = addGuess(guess);
    expect(action.guess).toEqual(guess);
  });
});
