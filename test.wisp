(set! global 1)

(.add Tinytest "wisp - We can write code in wisp"
              (fn [test]
                (test.isTrue true)))