(set! global 1)

(def r (Npm.require "wisp/runtime.js"))

(.add Tinytest "wisp - compile"
              (fn [test]
                (test.isTrue true)))

(.add Tinytest "wisp - can access wips libraries"
              (fn [test]
                (test.equal (r.identity 1) 1)))