(def ^:private exports {})

(def global 1)

(def r (Npm.require "wisp/runtime.js"))

(.add Tinytest "wisp - compile"
              (fn [test]
                (test.isTrue true)))