(def global 1)

(def r (Npm.require "wisp.runtime"))

(TinyTest.add "wisp - compile"
              (fn [test]
                (test.isTrue true)))