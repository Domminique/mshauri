;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    206: function (e, n, t) {},
    362: function (e, n, t) {
      'use strict'
      t.r(n)
      var a,
        r,
        i,
        c,
        o,
        s,
        l,
        d,
        b,
        p,
        j,
        h,
        m,
        g,
        u,
        x,
        O,
        f,
        v,
        y,
        w,
        A,
        C,
        E,
        k,
        I,
        T,
        B,
        N,
        R,
        S,
        L,
        U,
        H,
        X,
        W,
        D,
        K,
        J = t(1),
        P = t.n(J),
        z = t(73),
        F = t.n(z),
        G = (t(205), t(206), t(26)),
        Q = t(15),
        M = t(4),
        Y = t.p + 'static/media/svg-23.3a21e174.svg',
        Z = t(9),
        V = t(10),
        q = V.a.main(
          a ||
            (a = Object(Z.a)([
              '\n  nav {\n    width: var(--fluid-width);\n    max-width: var(--max-width);\n    margin: 0 auto;\n    height: var(--nav-height);\n    display: flex;\n    align-items: center;\n  }\n  .page {\n    min-height: calc(100vh - var(--nav-height));\n    display: grid;\n    align-items: center;\n    margin-top: -3rem;\n  }\n  h1 {\n    font-weight: 700;\n    span {\n      color: var(--primary-500);\n    }\n  }\n  p {\n    color: var(--grey-600);\n  }\n  .main-img {\n    display: none;\n  }\n  @media (min-width: 992px) {\n    .page {\n      grid-template-columns: 1fr 1fr;\n      column-gap: 3rem;\n    }\n    .main-img {\n      display: block;\n    }\n  }\n',
            ]))
        ),
        _ = q,
        $ = t.p + 'static/media/emedlogo.4c6f7cb6.png',
        ee = Object(V.a)(G.b)(
          r ||
            (r = Object(Z.a)([
              '\n  border-radius: 50px;\n  background: ',
              ';\n  white-space: nowrap;\n  padding: ',
              ';\n  color: ',
              ';\n  font-size: ',
              ';\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none !important;\n\n  // &:hover {\n  //   transition: all 0.2s ease-in-out;\n  //   background: #fff;\n  //   color: #010606;\n  // }\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: ',
              ';\n  }\n',
            ])),
          function (e) {
            return e.primary ? '#d7e824' : '#010606'
          },
          function (e) {
            return e.big ? ' 14px 48px' : '12px 30px'
          },
          function (e) {
            return e.dark ? '#010606' : '#fff'
          },
          function (e) {
            return e.fontBig ? '20px' : '16px'
          },
          function (e) {
            return e.primary ? '#fff' : '#d7e824'
          }
        ),
        ne = V.a.div(
          i ||
            (i = Object(Z.a)([
              '\n  color: #fff;\n  background: ',
              ';\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n',
            ])),
          function (e) {
            return e.lightBg ? '#f9f9f9' : '#010606'
          }
        ),
        te = V.a.div(
          c ||
            (c = Object(Z.a)([
              '\n  display: grid;\n  z-index: 1;\n  height: 860px;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 24px;\n  justify-content: center;\n',
            ]))
        ),
        ae = V.a.div(
          o ||
            (o = Object(Z.a)([
              '\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ',
              ';\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ',
              ';\n  }\n',
            ])),
          function (e) {
            return e.imgStart ? "'col2 col1'" : "'col1 col2'"
          },
          function (e) {
            return e.imgStart ? "'col1' 'col2'" : "'col1 col1' 'col2 col2'"
          }
        ),
        re = V.a.div(
          s ||
            (s = Object(Z.a)([
              '\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n',
            ]))
        ),
        ie = V.a.div(
          l ||
            (l = Object(Z.a)([
              '\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n',
            ]))
        ),
        ce = V.a.div(
          d ||
            (d = Object(Z.a)([
              '\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n',
            ]))
        ),
        oe = V.a.p(
          b ||
            (b = Object(Z.a)([
              '\n  color: #d7e824;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n',
            ]))
        ),
        se = V.a.h1(
          p ||
            (p = Object(Z.a)([
              '\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ',
              ';\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n',
            ])),
          function (e) {
            return e.lightText ? '#236de6' : '#010606'
          }
        ),
        le = V.a.p(
          j ||
            (j = Object(Z.a)([
              '\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ',
              ';\n',
            ])),
          function (e) {
            return e.darkText ? '#010606' : '#fff'
          }
        ),
        de = V.a.div(
          h ||
            (h = Object(Z.a)([
              '\n  display: flex;\n  justify-content: flex-start;\n',
            ]))
        ),
        be = V.a.div(
          m || (m = Object(Z.a)(['\n  max-width: 555px;\n  height: 100%;\n']))
        ),
        pe = V.a.img(
          g ||
            (g = Object(Z.a)([
              '\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n',
            ]))
        ),
        je = t(2),
        he = function (e) {
          var n = e.lightBg,
            t = e.imgStart,
            a = e.topLine,
            r = e.lightText,
            i = e.headline,
            c = e.darkText,
            o = e.description,
            s = e.buttonLabel,
            l = e.img,
            d = e.alt,
            b = e.primary,
            p = e.dark,
            j = e.dark2,
            h = e.id
          return Object(je.jsx)(P.a.Fragment, {
            children: Object(je.jsx)(ne, {
              lightBg: n,
              id: h,
              children: Object(je.jsx)(te, {
                children: Object(je.jsxs)(ae, {
                  imgStart: t,
                  children: [
                    Object(je.jsx)(re, {
                      children: Object(je.jsxs)(ce, {
                        children: [
                          Object(je.jsxs)(oe, { children: [a, ' '] }),
                          Object(je.jsx)(se, { lightText: r, children: i }),
                          Object(je.jsx)(le, { darkText: c, children: o }),
                          Object(je.jsx)(de, {
                            children: Object(je.jsx)(ee, {
                              to: '/register',
                              smooth: !0,
                              duration: 500,
                              spy: !0,
                              exact: 'true',
                              offset: -80,
                              primary: b ? 1 : 0,
                              dark: p ? 1 : 0,
                              dark2: j ? 1 : 0,
                              children: s,
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(je.jsx)(ie, {
                      children: Object(je.jsx)(be, {
                        children: Object(je.jsx)(pe, { src: l, alt: d }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        },
        me = t.p + 'static/media/patient.b1ab85f6.svg',
        ge = t.p + 'static/media/serviceprovider.8bfef948.svg',
        ue =
          (t.p,
          {
            id: 'about',
            lightBg: !1,
            lightText: !0,
            lightTextDesc: !0,
            topLine: 'For health care  service providers',
            headline:
              'Aiming to bridge the gab between hospital care and treatment, home based and ambulance tranfer.',
            description:
              'We empower service providers with cutting edge technologies that help them  manage bookings, maximize your reach, minimize cost as they provide wholistic emergency and convinient care to clients per their health needs anywhere anytime! ',
            buttonLabel: 'Join as a service provider',
            imgStart: !1,
            img: me,
            alt: 'Car',
            dark: !0,
            primary: !0,
            darkText: !1,
          }),
        xe = {
          id: 'discover',
          lightBg: !0,
          lightText: !1,
          lightTextDesc: !1,
          topLine: 'Advancing access to healthcare services for Patients',
          headline:
            'Get the best health services, insurance, dental, inpatient and more, ',
          description:
            'Transforming the delivery of health services to patients by connecting them directly to doctors, helping them avoid unnecessary referrals and reduces costs for them while improving efficiency and bettering their care ',
          buttonLabel: 'Join as a patient',
          imgStart: !0,
          img: ge,
          alt: 'API integration',
          dark: !1,
          primary: !1,
          darkText: !0,
        },
        Oe = t(28),
        fe = t(51),
        ve = t(14),
        ye = t(62),
        we = 'SHOW_ALERT',
        Ae = 'CLEAR_ALERT',
        Ce = 'SETUP_USER_BEGIN',
        Ee = 'SETUP_USER_SUCCESS',
        ke = 'SETUP_USER_ERROR',
        Ie = 'TOGGLE_SIDEBAR',
        Te = 'LOGOUT_USER',
        Be = 'UPDATE_USER_BEGIN',
        Ne = 'UPDATE_USER_SUCCESS',
        Re = 'UPDATE_USER_ERROR',
        Se = 'HANDLE_CHANGE',
        Le = 'CLEAR_VALUES',
        Ue = 'CREATE_JOB_BEGIN',
        He = 'CREATE_JOB_SUCCESS',
        Xe = 'CREATE_JOB_ERROR',
        We = 'GET_JOBS_BEGIN',
        De = 'GET_JOBS_SUCCESS',
        Ke = 'SET_EDIT_JOB',
        Je = 'DELETE_JOB_BEGIN',
        Pe = 'EDIT_JOB_BEGIN',
        ze = 'EDIT_JOB_SUCCESS',
        Fe = 'EDIT_JOB_ERROR',
        Ge = 'SHOW_STATS_BEGIN',
        Qe = 'SHOW_STATS_SUCCESS',
        Me = 'CLEAR_FILTERS',
        Ye = 'CHANGE_PAGE',
        Ze = function (e, n) {
          if (n.type === we)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                showAlert: !0,
                alertType: 'danger',
                alertText: 'Please provide all values!',
              }
            )
          if (n.type === Ae)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              { showAlert: !1, alertType: '', alertText: '' }
            )
          if (n.type === Ce)
            return Object(M.a)(Object(M.a)({}, e), {}, { isLoading: !0 })
          if (n.type === Ee)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !0,
                token: n.payload.token,
                user: n.payload.user,
                userLocation: n.payload.location,
                jobLocation: n.payload.location,
                showAlert: !0,
                alertType: 'success',
                alertText: n.payload.alertText,
              }
            )
          if (n.type === ke)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                showAlert: !0,
                alertType: 'danger',
                alertText: n.payload.msg,
              }
            )
          if (n.type === Ie)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              { showSidebar: !e.showSidebar }
            )
          if (n.type === Te)
            return Object(M.a)(
              Object(M.a)({}, nn),
              {},
              { user: null, token: null, jobLocation: '', userLocation: '' }
            )
          if (n.type === Be)
            return Object(M.a)(Object(M.a)({}, e), {}, { isLoading: !0 })
          if (n.type === Ne)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                token: n.payload.token,
                user: n.payload.user,
                userLocation: n.payload.location,
                jobLocation: n.payload.location,
                showAlert: !0,
                alertType: 'success',
                alertText: 'User Profile Updated!',
              }
            )
          if (n.type === Re)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                showAlert: !0,
                alertType: 'danger',
                alertText: n.payload.msg,
              }
            )
          if (n.type === Se)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              Object(ye.a)({ page: 1 }, n.payload.name, n.payload.value)
            )
          if (n.type === Le) {
            var t = {
              isEditing: !1,
              editJobId: '',
              position: '',
              company: '',
              jobLocation: e.userLocation,
              jobType: 'full-time',
              status: 'pending',
            }
            return Object(M.a)(Object(M.a)({}, e), t)
          }
          if (n.type === Ue)
            return Object(M.a)(Object(M.a)({}, e), {}, { isLoading: !0 })
          if (n.type === He)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                showAlert: !0,
                alertType: 'success',
                alertText: 'New Health Care Service Created!',
              }
            )
          if (n.type === Xe)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                showAlert: !0,
                alertType: 'danger',
                alertText: n.payload.msg,
              }
            )
          if (n.type === We)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              { isLoading: !0, showAlert: !1 }
            )
          if (n.type === De)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                jobs: n.payload.jobs,
                totalJobs: n.payload.totalJobs,
                numOfPages: n.payload.numOfPages,
              }
            )
          if (n.type === Ke) {
            var a = e.jobs.find(function (e) {
                return e._id === n.payload.id
              }),
              r = a._id,
              i = a.position,
              c = a.company,
              o = a.jobLocation,
              s = a.jobType,
              l = a.status
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isEditing: !0,
                editJobId: r,
                position: i,
                company: c,
                jobLocation: o,
                jobType: s,
                status: l,
              }
            )
          }
          if (n.type === Je)
            return Object(M.a)(Object(M.a)({}, e), {}, { isLoading: !0 })
          if (n.type === Pe)
            return Object(M.a)(Object(M.a)({}, e), {}, { isLoading: !0 })
          if (n.type === ze)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                showAlert: !0,
                alertType: 'success',
                alertText: 'Health Care Service Updated!',
              }
            )
          if (n.type === Fe)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                showAlert: !0,
                alertType: 'danger',
                alertText: n.payload.msg,
              }
            )
          if (n.type === Ge)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              { isLoading: !0, showAlert: !1 }
            )
          if (n.type === Qe)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                isLoading: !1,
                stats: n.payload.stats,
                monthlyApplications: n.payload.monthlyApplications,
              }
            )
          if (n.type === Me)
            return Object(M.a)(
              Object(M.a)({}, e),
              {},
              {
                search: '',
                searchStatus: 'all',
                searchType: 'all',
                sort: 'latest',
              }
            )
          if (n.type === Ye)
            return Object(M.a)(Object(M.a)({}, e), {}, { page: n.payload.page })
          throw new Error('no such action : '.concat(n.type))
        },
        Ve = t(122),
        qe = t.n(Ve),
        _e = localStorage.getItem('token'),
        $e = localStorage.getItem('user'),
        en = localStorage.getItem('location'),
        nn = {
          isLoading: !1,
          showAlert: !1,
          alertText: '',
          alertType: '',
          user: $e ? JSON.parse($e) : null,
          token: _e,
          userLocation: en || '',
          showSidebar: !1,
          isEditing: !1,
          editJobId: '',
          position: '',
          company: '',
          jobLocation: en || '',
          jobTypeOptions: ['doctor', 'ambulance', 'health service'],
          jobType: 'doctor',
          statusOptions: ['verified', 'declined', 'pending'],
          status: 'pending',
          jobs: [],
          totalJobs: 0,
          numOfPages: 1,
          page: 1,
          stats: {},
          monthlyApplications: [],
          search: '',
          searchStatus: 'all',
          searchType: 'all',
          sort: 'latest',
          sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
        },
        tn = P.a.createContext(),
        an = function (e) {
          var n = e.children,
            t = Object(J.useReducer)(Ze, nn),
            a = Object(ve.a)(t, 2),
            r = a[0],
            i = a[1],
            c = qe.a.create({ baseURL: '/api/v1' })
          c.interceptors.request.use(
            function (e) {
              return (
                (e.headers.common.Authorization = 'Bearer '.concat(r.token)), e
              )
            },
            function (e) {
              return Promise.reject(e)
            }
          ),
            c.interceptors.response.use(
              function (e) {
                return e
              },
              function (e) {
                return 401 === e.response.status && d(), Promise.reject(e)
              }
            )
          var o = function () {
              setTimeout(function () {
                i({ type: Ae })
              }, 3e3)
            },
            s = function (e) {
              var n = e.user,
                t = e.token,
                a = e.location
              localStorage.setItem('user', JSON.stringify(n)),
                localStorage.setItem('token', t),
                localStorage.setItem('location', a)
            },
            l = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e(n) {
                  var t, a, r, c, l, d, b, p
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n.currentUser),
                              (a = n.endPoint),
                              (r = n.alertText),
                              i({ type: Ce }),
                              (e.prev = 2),
                              (e.next = 5),
                              qe.a.post('/api/v1/auth/'.concat(a), t)
                            )
                          case 5:
                            ;(c = e.sent),
                              (l = c.data),
                              (d = l.user),
                              (b = l.token),
                              (p = l.location),
                              i({
                                type: Ee,
                                payload: {
                                  user: d,
                                  token: b,
                                  location: p,
                                  alertText: r,
                                },
                              }),
                              s({ user: d, token: b, location: p }),
                              (e.next = 15)
                            break
                          case 12:
                            ;(e.prev = 12),
                              (e.t0 = e.catch(2)),
                              i({
                                type: ke,
                                payload: { msg: e.t0.response.data.msg },
                              })
                          case 15:
                            o()
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[2, 12]]
                  )
                })
              )
              return function (n) {
                return e.apply(this, arguments)
              }
            })(),
            d = function () {
              i({ type: Te }),
                localStorage.removeItem('token'),
                localStorage.removeItem('user'),
                localStorage.removeItem('location')
            },
            b = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e(n) {
                  var t, a, r, l, d
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i({ type: Be }),
                              (e.prev = 1),
                              (e.next = 4),
                              c.patch('/auth/updateUser', n)
                            )
                          case 4:
                            ;(t = e.sent),
                              (a = t.data),
                              (r = a.user),
                              (l = a.location),
                              (d = a.token),
                              i({
                                type: Ne,
                                payload: { user: r, location: l, token: d },
                              }),
                              s({ user: r, location: l, token: d }),
                              (e.next = 14)
                            break
                          case 11:
                            ;(e.prev = 11),
                              (e.t0 = e.catch(1)),
                              401 !== e.t0.response.status &&
                                i({
                                  type: Re,
                                  payload: { msg: e.t0.response.data.msg },
                                })
                          case 14:
                            o()
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  )
                })
              )
              return function (n) {
                return e.apply(this, arguments)
              }
            })(),
            p = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e() {
                  var n, t, a, s, l
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i({ type: Ue }),
                              (e.prev = 1),
                              (n = r.position),
                              (t = r.company),
                              (a = r.jobLocation),
                              (s = r.jobType),
                              (l = r.status),
                              (e.next = 5),
                              c.post('/jobs', {
                                position: n,
                                company: t,
                                jobLocation: a,
                                jobType: s,
                                status: l,
                              })
                            )
                          case 5:
                            i({ type: He }), i({ type: Le }), (e.next = 14)
                            break
                          case 9:
                            if (
                              ((e.prev = 9),
                              (e.t0 = e.catch(1)),
                              401 !== e.t0.response.status)
                            ) {
                              e.next = 13
                              break
                            }
                            return e.abrupt('return')
                          case 13:
                            i({
                              type: Xe,
                              payload: { msg: e.t0.response.data.msg },
                            })
                          case 14:
                            o()
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            j = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e() {
                  var n, t, a, s, l, b, p, j, h, m, g
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = r.page),
                              (t = r.search),
                              (a = r.searchStatus),
                              (s = r.searchType),
                              (l = r.sort),
                              (b = '/jobs?page='
                                .concat(n, '&status=')
                                .concat(a, '&jobType=')
                                .concat(s, '&sort=')
                                .concat(l)),
                              t && (b += '&search='.concat(t)),
                              i({ type: We }),
                              (e.prev = 4),
                              (e.next = 7),
                              c(b)
                            )
                          case 7:
                            ;(p = e.sent),
                              (j = p.data),
                              (h = j.jobs),
                              (m = j.totalJobs),
                              (g = j.numOfPages),
                              i({
                                type: De,
                                payload: {
                                  jobs: h,
                                  totalJobs: m,
                                  numOfPages: g,
                                },
                              }),
                              (e.next = 16)
                            break
                          case 13:
                            ;(e.prev = 13), (e.t0 = e.catch(4)), d()
                          case 16:
                            o()
                          case 17:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[4, 13]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            h = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e() {
                  var n, t, a, s, l
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i({ type: Pe }),
                              (e.prev = 1),
                              (n = r.position),
                              (t = r.company),
                              (a = r.jobLocation),
                              (s = r.jobType),
                              (l = r.status),
                              (e.next = 5),
                              c.patch('/jobs/'.concat(r.editJobId), {
                                company: t,
                                position: n,
                                jobLocation: a,
                                jobType: s,
                                status: l,
                              })
                            )
                          case 5:
                            i({ type: ze }), i({ type: Le }), (e.next = 14)
                            break
                          case 9:
                            if (
                              ((e.prev = 9),
                              (e.t0 = e.catch(1)),
                              401 !== e.t0.response.status)
                            ) {
                              e.next = 13
                              break
                            }
                            return e.abrupt('return')
                          case 13:
                            i({
                              type: Fe,
                              payload: { msg: e.t0.response.data.msg },
                            })
                          case 14:
                            o()
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            m = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e(n) {
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i({ type: Je }),
                              (e.prev = 1),
                              (e.next = 4),
                              c.delete('/jobs/'.concat(n))
                            )
                          case 4:
                            j(), (e.next = 10)
                            break
                          case 7:
                            ;(e.prev = 7), (e.t0 = e.catch(1)), d()
                          case 10:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 7]]
                  )
                })
              )
              return function (n) {
                return e.apply(this, arguments)
              }
            })(),
            g = (function () {
              var e = Object(fe.a)(
                Object(Oe.a)().mark(function e() {
                  var n, t
                  return Object(Oe.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i({ type: Ge }),
                              (e.prev = 1),
                              (e.next = 4),
                              c('/jobs/stats')
                            )
                          case 4:
                            ;(n = e.sent),
                              (t = n.data),
                              i({
                                type: Qe,
                                payload: {
                                  stats: t.defaultStats,
                                  monthlyApplications: t.monthlyApplications,
                                },
                              }),
                              (e.next = 12)
                            break
                          case 9:
                            ;(e.prev = 9), (e.t0 = e.catch(1)), d()
                          case 12:
                            o()
                          case 13:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(je.jsx)(tn.Provider, {
            value: Object(M.a)(
              Object(M.a)({}, r),
              {},
              {
                displayAlert: function () {
                  i({ type: we }), o()
                },
                setupUser: l,
                toggleSidebar: function () {
                  i({ type: Ie })
                },
                logoutUser: d,
                updateUser: b,
                handleChange: function (e) {
                  var n = e.name,
                    t = e.value
                  i({ type: Se, payload: { name: n, value: t } })
                },
                clearValues: function () {
                  i({ type: Le })
                },
                createJob: p,
                getJobs: j,
                setEditJob: function (e) {
                  i({ type: Ke, payload: { id: e } })
                },
                deleteJob: m,
                editJob: h,
                showStats: g,
                clearFilters: function () {
                  i({ type: Me })
                },
                changePage: function (e) {
                  i({ type: Ye, payload: { page: e } })
                },
              }
            ),
            children: n,
          })
        },
        rn = function () {
          return Object(J.useContext)(tn)
        },
        cn = function () {
          var e = rn(),
            n = e.alertType,
            t = e.alertText
          return Object(je.jsx)('div', {
            className: 'alert alert-'.concat(n),
            children: t,
          })
        },
        on = t(176),
        sn = t(177),
        ln = t(24),
        dn = t(178),
        bn = [
          { id: 1, text: 'stats', path: '/', icon: Object(je.jsx)(on.a, {}) },
          {
            id: 2,
            text: 'all services ',
            path: 'all-jobs',
            icon: Object(je.jsx)(sn.a, {}),
          },
          {
            id: 3,
            text: 'add service',
            path: 'add-job',
            icon: Object(je.jsx)(ln.o, {}),
          },
          {
            id: 4,
            text: 'profile',
            path: 'profile',
            icon: Object(je.jsx)(dn.a, {}),
          },
        ],
        pn = function (e) {
          var n = e.toggleSidebar
          return Object(je.jsx)('div', {
            className: 'nav-links',
            children: bn.map(function (e) {
              var t = e.text,
                a = e.path,
                r = e.id,
                i = e.icon
              return Object(je.jsxs)(
                G.c,
                {
                  to: a,
                  onClick: n,
                  className: function (e) {
                    return e.isActive ? 'nav-link active' : 'nav-link'
                  },
                  children: [
                    Object(je.jsx)('span', { className: 'icon', children: i }),
                    t,
                  ],
                },
                r
              )
            }),
          })
        },
        jn =
          (t.p,
          V.a.aside(
            u ||
              (u = Object(Z.a)([
                '\n  display: none;\n  @media (min-width: 992px) {\n    display: block;\n    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);\n    .sidebar-container {\n      background: var(--white);\n      min-height: 100vh;\n      height: 100%;\n      width: 250px;\n      margin-left: -250px;\n      transition: var(--transition);\n    }\n    .content {\n      position: sticky;\n      top: 0;\n    }\n    .show-sidebar {\n      margin-left: 0;\n    }\n    header {\n      height: 6rem;\n      display: flex;\n      align-items: center;\n      padding-left: 2.5rem;\n    }\n    .nav-links {\n      padding-top: 2rem;\n      display: flex;\n      flex-direction: column;\n    }\n    .nav-link {\n      display: flex;\n      align-items: center;\n      color: var(--grey-500);\n      padding: 1rem 0;\n      padding-left: 2.5rem;\n      text-transform: capitalize;\n      transition: var(--transition);\n    }\n    .nav-link:hover {\n      background: var(--grey-50);\n      padding-left: 3rem;\n      color: var(--grey-900);\n    }\n    .nav-link:hover .icon {\n      color: var(--primary-500);\n    }\n    .icon {\n      font-size: 1.5rem;\n      margin-right: 1rem;\n      display: grid;\n      place-items: center;\n      transition: var(--transition);\n    }\n    .active {\n      color: var(--grey-900);\n    }\n    .active .icon {\n      color: var(--primary-500);\n    }\n  }\n',
              ]))
          )),
        hn = function () {
          var e = rn().showSidebar
          return Object(je.jsx)(jn, {
            children: Object(je.jsx)('div', {
              className: e
                ? 'sidebar-container '
                : 'sidebar-container show-sidebar',
              children: Object(je.jsxs)('div', {
                className: 'content',
                children: [
                  Object(je.jsx)('header', {
                    children: Object(je.jsxs)('h4', {
                      children: [
                        'emed',
                        Object(je.jsx)('span', { children: 'Africa' }),
                      ],
                    }),
                  }),
                  Object(je.jsx)(pn, {}),
                ],
              }),
            }),
          })
        },
        mn = t(363),
        gn = t(364),
        un = t(368),
        xn = t(97),
        On = t(98),
        fn = t(81),
        vn = t(195),
        yn = function (e) {
          var n = e.data
          return Object(je.jsx)(mn.a, {
            width: '100%',
            height: 300,
            children: Object(je.jsxs)(gn.a, {
              data: n,
              margin: { top: 50 },
              children: [
                Object(je.jsx)(un.a, { strokeDasharray: '3 3 ' }),
                Object(je.jsx)(xn.a, { dataKey: 'date' }),
                Object(je.jsx)(On.a, { allowDecimals: !1 }),
                Object(je.jsx)(fn.a, {}),
                Object(je.jsx)(vn.a, {
                  dataKey: 'count',
                  fill: '#2cb1bc',
                  barSize: 75,
                }),
              ],
            }),
          })
        },
        wn = t(369),
        An = t(192),
        Cn = function (e) {
          var n = e.data
          return Object(je.jsx)(mn.a, {
            width: '100%',
            height: 300,
            children: Object(je.jsxs)(wn.a, {
              data: n,
              margin: { top: 50 },
              children: [
                Object(je.jsx)(un.a, { strokeDasharray: '3 3' }),
                Object(je.jsx)(xn.a, { dataKey: 'date' }),
                Object(je.jsx)(On.a, { allowDecimals: !1 }),
                Object(je.jsx)(fn.a, {}),
                Object(je.jsx)(An.a, {
                  type: 'monotone',
                  dataKey: 'count',
                  stroke: '#2cb1bc',
                  fill: '#bef8fd',
                }),
              ],
            }),
          })
        },
        En = V.a.section(
          x ||
            (x = Object(Z.a)([
              '\n  margin-top: 4rem;\n  text-align: center;\n  button {\n    background: transparent;\n    border-color: transparent;\n    text-transform: capitalize;\n    color: var(--primary-500);\n    font-size: 1.25rem;\n    cursor: pointer;\n  }\n  h4 {\n    text-align: center;\n    margin-bottom: 0.75rem;\n  }\n',
            ]))
        ),
        kn = function () {
          var e = Object(J.useState)(!0),
            n = Object(ve.a)(e, 2),
            t = n[0],
            a = n[1],
            r = rn().monthlyApplications
          return Object(je.jsxs)(En, {
            children: [
              Object(je.jsx)('h4', { children: 'Monthly Applications' }),
              Object(je.jsx)('button', {
                type: 'button',
                onClick: function () {
                  return a(!t)
                },
                children: t ? 'Area Chart' : 'Bar Chart',
              }),
              t
                ? Object(je.jsx)(yn, { data: r })
                : Object(je.jsx)(Cn, { data: r }),
            ],
          })
        },
        In = function (e) {
          var n = e.type,
            t = e.name,
            a = e.value,
            r = e.handleChange,
            i = e.labelText
          return Object(je.jsxs)('div', {
            className: 'form-row',
            children: [
              Object(je.jsx)('label', {
                htmlFor: t,
                className: 'form-label',
                children: i || t,
              }),
              Object(je.jsx)('input', {
                type: n,
                value: a,
                name: t,
                onChange: r,
                className: 'form-input',
              }),
            ],
          })
        },
        Tn = function (e) {
          var n = e.labelText,
            t = e.name,
            a = e.value,
            r = e.handleChange,
            i = e.list
          return Object(je.jsxs)('div', {
            className: 'form-row',
            children: [
              Object(je.jsx)('label', {
                htmlFor: t,
                className: 'form-label',
                children: n || t,
              }),
              Object(je.jsx)('select', {
                name: t,
                value: a,
                onChange: r,
                className: 'form-select',
                children: i.map(function (e, n) {
                  return Object(je.jsx)('option', { value: e, children: e }, n)
                }),
              }),
            ],
          })
        },
        Bn = function (e) {
          var n = e.center
          return Object(je.jsx)('div', {
            className: n ? 'loading loading-center' : 'loading',
          })
        },
        Nn = t(193),
        Rn = t.n(Nn),
        Sn = V.a.article(
          O ||
            (O = Object(Z.a)([
              '\n  background: var(--white);\n  border-radius: var(--borderRadius);\n  display: grid;\n  grid-template-rows: 1fr auto;\n  box-shadow: var(--shadow-2);\n\n  header {\n    padding: 1rem 1.5rem;\n    border-bottom: 1px solid var(--grey-100);\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    h5 {\n      letter-spacing: 0;\n    }\n  }\n  .main-icon {\n    width: 60px;\n    height: 60px;\n    display: grid;\n    place-items: center;\n    background: var(--primary-500);\n    border-radius: var(--borderRadius);\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: var(--white);\n    margin-right: 2rem;\n  }\n  .info {\n    h5 {\n      margin-bottom: 0.25rem;\n    }\n    p {\n      margin: 0;\n      text-transform: capitalize;\n      color: var(--grey-400);\n      letter-spacing: var(--letterSpacing);\n    }\n  }\n  .pending {\n    background: #fcefc7;\n    color: #e9b949;\n  }\n  .interview {\n    background: #e0e8f9;\n    color: #647acb;\n  }\n  .declined {\n    color: #d66a6a;\n    background: #ffeeee;\n  }\n  .content {\n    padding: 1rem 1.5rem;\n  }\n  .content-center {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 0.5rem;\n    @media (min-width: 576px) {\n      grid-template-columns: 1fr 1fr;\n    }\n    @media (min-width: 992px) {\n      grid-template-columns: 1fr;\n    }\n    @media (min-width: 1120px) {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  .status {\n    border-radius: var(--borderRadius);\n    text-transform: capitalize;\n    letter-spacing: var(--letterSpacing);\n    text-align: center;\n    width: 100px;\n    height: 30px;\n  }\n  footer {\n    margin-top: 1rem;\n  }\n  .edit-btn,\n  .delete-btn {\n    letter-spacing: var(--letterSpacing);\n    cursor: pointer;\n    height: 30px;\n  }\n  .edit-btn {\n    color: var(--green-dark);\n    background: var(--green-light);\n    margin-right: 0.5rem;\n  }\n  .delete-btn {\n    color: var(--red-dark);\n    background: var(--red-light);\n  }\n  &:hover .actions {\n    visibility: visible;\n  }\n',
            ]))
        ),
        Ln = V.a.div(
          f ||
            (f = Object(Z.a)([
              '\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n\n  .icon {\n    font-size: 1rem;\n    margin-right: 1rem;\n    display: flex;\n    align-items: center;\n    svg {\n      color: var(--grey-400);\n    }\n  }\n  .text {\n    text-transform: capitalize;\n    letter-spacing: var(--letterSpacing);\n  }\n',
            ]))
        ),
        Un = function (e) {
          var n = e.icon,
            t = e.text
          return Object(je.jsxs)(Ln, {
            children: [
              Object(je.jsx)('span', { className: 'icon', children: n }),
              Object(je.jsx)('span', { className: 'text', children: t }),
            ],
          })
        },
        Hn = function (e) {
          var n = e._id,
            t = e.position,
            a = e.company,
            r = e.jobLocation,
            i = e.jobType,
            c = e.createdAt,
            o = e.status,
            s = rn(),
            l = s.setEditJob,
            d = s.deleteJob,
            b = Rn()(c)
          return (
            (b = b.format('MMM Do, YYYY')),
            Object(je.jsxs)(Sn, {
              children: [
                Object(je.jsxs)('header', {
                  children: [
                    Object(je.jsx)('div', {
                      className: 'main-icon',
                      children: a.charAt(0),
                    }),
                    Object(je.jsxs)('div', {
                      className: 'info',
                      children: [
                        Object(je.jsx)('h5', { children: t }),
                        Object(je.jsx)('p', { children: a }),
                      ],
                    }),
                  ],
                }),
                Object(je.jsxs)('div', {
                  className: 'content',
                  children: [
                    Object(je.jsxs)('div', {
                      className: 'content-center',
                      children: [
                        Object(je.jsx)(Un, {
                          icon: Object(je.jsx)(ln.j, {}),
                          text: r,
                        }),
                        Object(je.jsx)(Un, {
                          icon: Object(je.jsx)(ln.d, {}),
                          text: b,
                        }),
                        Object(je.jsx)(Un, {
                          icon: Object(je.jsx)(ln.b, {}),
                          text: i,
                        }),
                        Object(je.jsx)('div', {
                          className: 'status '.concat(o),
                          children: o,
                        }),
                      ],
                    }),
                    Object(je.jsx)('footer', {
                      children: Object(je.jsxs)('div', {
                        className: 'actions',
                        children: [
                          Object(je.jsx)(G.b, {
                            to: '/add-job',
                            className: 'btn edit-btn',
                            onClick: function () {
                              return l(n)
                            },
                            children: 'Edit',
                          }),
                          Object(je.jsx)('button', {
                            type: 'button',
                            className: 'btn delete-btn',
                            onClick: function () {
                              return d(n)
                            },
                            children: 'Delete',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          )
        },
        Xn = V.a.section(
          v ||
            (v = Object(Z.a)([
              '\n  margin-top: 4rem;\n  h2 {\n    text-transform: none;\n  }\n  & > h5 {\n    font-weight: 700;\n  }\n  .jobs {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 2rem;\n  }\n  @media (min-width: 992px) {\n    .jobs {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem;\n    }\n  }\n',
            ]))
        ),
        Wn = t(125),
        Dn = V.a.section(
          y ||
            (y = Object(Z.a)([
              '\n  height: 6rem;\n  margin-top: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  flex-wrap: wrap;\n  gap: 1rem;\n  .btn-container {\n    background: var(--primary-100);\n    border-radius: var(--borderRadius);\n  }\n  .pageBtn {\n    background: transparent;\n    border-color: transparent;\n    width: 50px;\n    height: 40px;\n    font-weight: 700;\n    font-size: 1.25rem;\n    color: var(--primary-500);\n    transition: var(--transition);\n    border-radius: var(--borderRadius);\n    cursor: pointer;\n  }\n  .active {\n    background: var(--primary-500);\n    color: var(--white);\n  }\n  .prev-btn,\n  .next-btn {\n    width: 100px;\n    height: 40px;\n    background: var(--white);\n    border-color: transparent;\n    border-radius: var(--borderRadius);\n    color: var(--primary-500);\n    text-transform: capitalize;\n    letter-spacing: var(--letterSpacing);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    cursor: pointer;\n    transition: var(--transition);\n  }\n  .prev-btn:hover,\n  .next-btn:hover {\n    background: var(--primary-500);\n    color: var(--white);\n  }\n',
            ]))
        ),
        Kn = function () {
          var e = rn(),
            n = e.numOfPages,
            t = e.page,
            a = e.changePage,
            r = Array.from({ length: n }, function (e, n) {
              return n + 1
            })
          return Object(je.jsxs)(Dn, {
            children: [
              Object(je.jsxs)('button', {
                className: 'prev-btn',
                onClick: function () {
                  var e = t - 1
                  e < 1 && (e = n), a(e)
                },
                children: [Object(je.jsx)(Wn.a, {}), 'prev'],
              }),
              Object(je.jsx)('div', {
                className: 'btn-container',
                children: r.map(function (e) {
                  return Object(je.jsx)(
                    'button',
                    {
                      type: 'button',
                      className: e === t ? 'pageBtn active' : 'pageBtn',
                      onClick: function () {
                        return a(e)
                      },
                      children: e,
                    },
                    e
                  )
                }),
              }),
              Object(je.jsxs)('button', {
                className: 'next-btn',
                onClick: function () {
                  var e = t + 1
                  e > n && (e = 1), a(e)
                },
                children: ['next', Object(je.jsx)(Wn.b, {})],
              }),
            ],
          })
        },
        Jn = function () {
          var e = rn(),
            n = e.getJobs,
            t = e.jobs,
            a = e.isLoading,
            r = e.page,
            i = e.totalJobs,
            c = e.search,
            o = e.searchStatus,
            s = e.searchType,
            l = e.sort,
            d = e.numOfPages
          return (
            Object(J.useEffect)(
              function () {
                n()
              },
              [r, c, o, s, l]
            ),
            a
              ? Object(je.jsx)(Bn, { center: !0 })
              : 0 === t.length
              ? Object(je.jsx)(Xn, {
                  children: Object(je.jsx)('h2', {
                    children: 'No service providers to display...',
                  }),
                })
              : Object(je.jsxs)(Xn, {
                  children: [
                    Object(je.jsxs)('h5', {
                      children: [
                        i,
                        ' service provider',
                        t.length > 1 && 's',
                        ' found',
                      ],
                    }),
                    Object(je.jsx)('div', {
                      className: 'jobs',
                      children: t.map(function (e) {
                        return Object(je.jsx)(Hn, Object(M.a)({}, e), e._id)
                      }),
                    }),
                    d > 1 && Object(je.jsx)(Kn, {}),
                  ],
                })
          )
        },
        Pn = V.a.nav(
          w ||
            (w = Object(Z.a)([
              '\n  height: var(--nav-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);\n  .logo {\n    display: flex;\n    align-items: center;\n    width: 100px;\n  }\n  .nav-center {\n    display: flex;\n    width: 90vw;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .toggle-btn {\n    background: transparent;\n    border-color: transparent;\n    font-size: 1.75rem;\n    color: var(--primary-500);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n  }\n  background: var(--white);\n  .btn-container {\n    position: relative;\n  }\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0 0.5rem;\n    position: relative;\n    box-shadow: var(--shadow-2);\n  }\n\n  .dropdown {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    width: 100%;\n    background: var(--primary-100);\n    box-shadow: var(--shadow-2);\n    padding: 0.5rem;\n    text-align: center;\n    visibility: hidden;\n    border-radius: var(--borderRadius);\n  }\n  .show-dropdown {\n    visibility: visible;\n  }\n  .dropdown-btn {\n    background: transparent;\n    border-color: transparent;\n    color: var(--primary-500);\n    letter-spacing: var(--letterSpacing);\n    text-transform: capitalize;\n    cursor: pointer;\n  }\n  .logo-text {\n    display: none;\n    margin: 0;\n  }\n  @media (min-width: 992px) {\n    position: sticky;\n    top: 0;\n\n    .nav-center {\n      width: 90%;\n    }\n    .logo {\n      display: none;\n    }\n    .logo-text {\n      display: block;\n    }\n  }\n',
            ]))
        ),
        zn = function () {
          var e = Object(J.useState)(!1),
            n = Object(ve.a)(e, 2),
            t = n[0],
            a = n[1],
            r = rn(),
            i = r.toggleSidebar,
            c = r.logoutUser,
            o = r.user
          return Object(je.jsx)(Pn, {
            children: Object(je.jsxs)('div', {
              className: 'nav-center',
              children: [
                Object(je.jsx)('button', {
                  type: 'button',
                  className: 'toggle-btn',
                  onClick: i,
                  children: Object(je.jsx)(ln.a, {}),
                }),
                Object(je.jsx)('div', {
                  children: Object(je.jsx)('h3', {
                    className: 'logo-text',
                    children: 'dashboard',
                  }),
                }),
                Object(je.jsxs)('div', {
                  className: 'btn-container',
                  children: [
                    Object(je.jsxs)('button', {
                      type: 'button',
                      className: 'btn',
                      onClick: function () {
                        return a(!t)
                      },
                      children: [
                        Object(je.jsx)(ln.n, {}),
                        null === o || void 0 === o ? void 0 : o.name,
                        Object(je.jsx)(ln.f, {}),
                      ],
                    }),
                    Object(je.jsx)('div', {
                      className: t ? 'dropdown show-dropdown' : 'dropdown',
                      children: Object(je.jsx)('button', {
                        type: 'button',
                        className: 'dropdown-btn',
                        onClick: c,
                        children: 'logout',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        Fn = t(127),
        Gn = V.a.section(
          A ||
            (A = Object(Z.a)([
              '\n  .form {\n    width: 100%;\n    max-width: 100%;\n  }\n  .form-input,\n  .form-select,\n  .btn-block {\n    height: 35px;\n  }\n  .form-row {\n    margin-bottom: 0;\n  }\n  .form-center {\n    display: grid;\n    grid-template-columns: 1fr;\n    column-gap: 2rem;\n    row-gap: 0.5rem;\n  }\n  h5 {\n    font-weight: 700;\n  }\n  .btn-block {\n    align-self: end;\n    margin-top: 1rem;\n  }\n  @media (min-width: 768px) {\n    .form-center {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n  @media (min-width: 992px) {\n    .form-center {\n      grid-template-columns: 1fr 1fr 1fr;\n    }\n    .btn-block {\n      margin-top: 0;\n    }\n  }\n',
            ]))
        ),
        Qn = function () {
          var e = rn(),
            n = e.isLoading,
            t = e.search,
            a = e.searchStatus,
            r = e.searchType,
            i = e.sort,
            c = e.sortOptions,
            o = e.handleChange,
            s = e.clearFilters,
            l = e.jobTypeOptions,
            d = e.statusOptions,
            b = function (e) {
              n || o({ name: e.target.name, value: e.target.value })
            }
          return Object(je.jsx)(Gn, {
            children: Object(je.jsxs)('form', {
              className: 'form',
              children: [
                Object(je.jsx)('h4', { children: 'search form' }),
                Object(je.jsxs)('div', {
                  className: 'form-center',
                  children: [
                    Object(je.jsx)(In, {
                      type: 'text',
                      name: 'search',
                      value: t,
                      handleChange: b,
                    }),
                    Object(je.jsx)(Tn, {
                      labelText: 'status',
                      name: 'searchStatus',
                      value: a,
                      handleChange: b,
                      list: ['all'].concat(Object(Fn.a)(d)),
                    }),
                    Object(je.jsx)(Tn, {
                      labelText: 'type',
                      name: 'searchType',
                      value: r,
                      handleChange: b,
                      list: ['all'].concat(Object(Fn.a)(l)),
                    }),
                    Object(je.jsx)(Tn, {
                      name: 'sort',
                      value: i,
                      handleChange: b,
                      list: c,
                    }),
                    Object(je.jsx)('button', {
                      className: 'btn btn-block btn-danger',
                      disabled: n,
                      onClick: function (e) {
                        e.preventDefault(), s()
                      },
                      children: 'clear filters',
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        Mn = V.a.aside(
          C ||
            (C = Object(Z.a)([
              '\n  @media (min-width: 992px) {\n    display: none;\n  }\n  .sidebar-container {\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n    opacity: 0;\n    transition: var(--transition);\n  }\n  .show-sidebar {\n    z-index: 99;\n    opacity: 1;\n  }\n  .content {\n    background: var(--white);\n    width: var(--fluid-width);\n    height: 95vh;\n    border-radius: var(--borderRadius);\n    padding: 4rem 2rem;\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .close-btn {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background: transparent;\n    border-color: transparent;\n    font-size: 2rem;\n    color: var(--red-dark);\n    cursor: pointer;\n  }\n  .nav-links {\n    padding-top: 2rem;\n    display: flex;\n    flex-direction: column;\n  }\n  .nav-link {\n    display: flex;\n    align-items: center;\n    color: var(--grey-500);\n    padding: 1rem 0;\n    text-transform: capitalize;\n    transition: var(--transition);\n  }\n  .nav-link:hover {\n    color: var(--grey-900);\n  }\n  .nav-link:hover .icon {\n    color: var(--primary-500);\n  }\n  .icon {\n    font-size: 1.5rem;\n    margin-right: 1rem;\n    display: grid;\n    place-items: center;\n    transition: var(--transition);\n  }\n  .active {\n    color: var(--grey-900);\n  }\n  .active .icon {\n    color: var(--primary-500);\n  }\n',
            ]))
        ),
        Yn = function () {
          var e = rn(),
            n = e.showSidebar,
            t = e.toggleSidebar
          return Object(je.jsx)(Mn, {
            children: Object(je.jsx)('div', {
              className: n
                ? 'sidebar-container show-sidebar'
                : 'sidebar-container',
              children: Object(je.jsxs)('div', {
                className: 'content',
                children: [
                  Object(je.jsx)('button', {
                    type: 'button',
                    className: 'close-btn',
                    onClick: t,
                    children: Object(je.jsx)(ln.l, {}),
                  }),
                  Object(je.jsx)('header', {
                    children: Object(je.jsx)('h4', { children: 'Mshauri' }),
                  }),
                  Object(je.jsx)(pn, { toggleSidebar: t }),
                ],
              }),
            }),
          })
        },
        Zn = V.a.article(
          E ||
            (E = Object(Z.a)([
              '\n  padding: 2rem;\n  background: var(--white);\n  border-radius: var(--borderRadius);\n  border-bottom: 5px solid ',
              ';\n  header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .count {\n    display: block;\n    font-weight: 700;\n    font-size: 50px;\n    color: ',
              ';\n  }\n  .title {\n    margin: 0;\n    text-transform: capitalize;\n    letter-spacing: var(--letterSpacing);\n    text-align: left;\n    margin-top: 0.5rem;\n  }\n  .icon {\n    width: 70px;\n    height: 60px;\n    background: ',
              ';\n    border-radius: var(--borderRadius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      font-size: 2rem;\n      color: ',
              ';\n    }\n  }\n',
            ])),
          function (e) {
            return e.color
          },
          function (e) {
            return e.color
          },
          function (e) {
            return e.bcg
          },
          function (e) {
            return e.color
          }
        ),
        Vn = function (e) {
          var n = e.count,
            t = e.title,
            a = e.icon,
            r = e.color,
            i = e.bcg
          return Object(je.jsxs)(Zn, {
            color: r,
            bcg: i,
            children: [
              Object(je.jsxs)('header', {
                children: [
                  Object(je.jsx)('span', { className: 'count', children: n }),
                  Object(je.jsx)('span', { className: 'icon', children: a }),
                ],
              }),
              Object(je.jsx)('h5', { className: 'title', children: t }),
            ],
          })
        },
        qn = V.a.section(
          k ||
            (k = Object(Z.a)([
              '\n  display: grid;\n  row-gap: 2rem;\n  @media (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n    column-gap: 1rem;\n  }\n  @media (min-width: 1120px) {\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 1rem;\n  }\n',
            ]))
        ),
        _n = function () {
          var e = rn().stats,
            n = [
              {
                title: 'pending applications',
                count: e.pending || 0,
                icon: Object(je.jsx)(ln.k, {}),
                color: '#e9b949',
                bcg: '#fcefc7',
              },
              {
                title: 'services verified',
                count: e.interview || 0,
                icon: Object(je.jsx)(ln.e, {}),
                color: '#647acb',
                bcg: '#e0e8f9',
              },
              {
                title: 'services declined',
                count: e.declined || 0,
                icon: Object(je.jsx)(ln.c, {}),
                color: '#d66a6a',
                bcg: '#ffeeee',
              },
            ]
          return Object(je.jsx)(qn, {
            children: n.map(function (e, n) {
              return Object(je.jsx)(Vn, Object(M.a)({}, e), n)
            }),
          })
        },
        $n = V.a.footer(
          I || (I = Object(Z.a)(['\n  background-color: #101522;\n']))
        ),
        et = V.a.div(
          T ||
            (T = Object(Z.a)([
              '\n  padding: 48px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1100px;\n  margin: 0 auto;\n',
            ]))
        ),
        nt = V.a.div(
          B ||
            (B = Object(Z.a)([
              '\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 820px) {\n    padding-top: 32px;\n  }\n',
            ]))
        ),
        tt = V.a.div(
          N ||
            (N = Object(Z.a)([
              '\n  display: flex;\n\n  @media screen and (max-width: 960px) {\n    flex-direction: column;\n  }\n',
            ]))
        ),
        at = V.a.div(
          R ||
            (R = Object(Z.a)([
              '\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 16px;\n  text-align: left;\n  width: 160px;\n  box-sizing: border-box;\n  color: #fff;\n\n  @media screen and (max-width: 420px) {\n    margin: 0;\n    padding: 10px;\n    width: 100%;\n  }\n',
            ]))
        ),
        rt = V.a.h1(
          S ||
            (S = Object(Z.a)([
              '\n  font-size: 14px;\n  margin-bottom: 16px;\n',
            ]))
        ),
        it = Object(V.a)(G.b)(
          L ||
            (L = Object(Z.a)([
              '\n  color: #fff;\n  text-decoration: none !important;\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n\n  &:hover {\n    color: #d7e824;\n    transition: 0.3s ease-out;\n  }\n',
            ]))
        ),
        ct = V.a.section(
          U || (U = Object(Z.a)(['\n  max-width: 1000px;\n  width: 100%;\n']))
        ),
        ot = V.a.div(
          H ||
            (H = Object(Z.a)([
              '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 40px auto 0 auto;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n',
            ]))
        ),
        st =
          (Object(V.a)(G.b)(
            X ||
              (X = Object(Z.a)([
                '\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-weight: bold;\n',
              ]))
          ),
          V.a.small(
            W ||
              (W = Object(Z.a)(['\n  color: #fff;\n  margin-bottom: 16px;\n']))
          )),
        lt = V.a.div(
          D ||
            (D = Object(Z.a)([
              '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n',
            ]))
        ),
        dt = V.a.a(
          K || (K = Object(Z.a)(['\n  color: #fff;\n  font-size: 24px;\n']))
        ),
        bt = function () {
          return Object(je.jsx)($n, {
            children: Object(je.jsxs)(et, {
              children: [
                Object(je.jsxs)(nt, {
                  children: [
                    Object(je.jsxs)(tt, {
                      children: [
                        Object(je.jsxs)(at, {
                          children: [
                            Object(je.jsx)(rt, { children: ' About Us' }),
                            Object(je.jsx)(it, {
                              to: '# ',
                              children: 'How it works',
                            }),
                            Object(je.jsx)(it, {
                              to: '# ',
                              children: 'Testimonials',
                            }),
                            Object(je.jsx)(it, {
                              to: '# ',
                              children: 'Careers',
                            }),
                            Object(je.jsx)(it, { to: '#', children: 'Blog' }),
                            Object(je.jsx)(it, {
                              to: ' #',
                              children: 'Terms of Service',
                            }),
                          ],
                        }),
                        Object(je.jsxs)(at, {
                          children: [
                            Object(je.jsx)(rt, { children: ' Contact Us' }),
                            Object(je.jsx)(it, {
                              to: '#',
                              children: 'Contact',
                            }),
                            Object(je.jsx)(it, {
                              to: '#',
                              children: 'Support',
                            }),
                            Object(je.jsx)(it, {
                              to: '# ',
                              children: 'Destinations',
                            }),
                            Object(je.jsx)(it, {
                              to: '#',
                              children: 'Sponsorships',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(je.jsxs)(tt, {
                      children: [
                        Object(je.jsxs)(at, {
                          children: [
                            Object(je.jsx)(rt, { children: ' Customers' }),
                            Object(je.jsx)(it, {
                              to: '#',
                              children: 'Submit Video',
                            }),
                            Object(je.jsx)(it, {
                              to: '#',
                              children: ' Ambassadors',
                            }),
                            Object(je.jsx)(it, { to: '#', children: 'Agency' }),
                            Object(je.jsx)(it, {
                              to: '# ',
                              children: 'Influencer',
                            }),
                            Object(je.jsx)(it, {
                              to: '# ',
                              children: 'Reviews ',
                            }),
                          ],
                        }),
                        Object(je.jsxs)(at, {
                          children: [
                            Object(je.jsx)(rt, { children: ' Business' }),
                            Object(je.jsx)(it, {
                              to: '/register ',
                              children: 'Doctors',
                            }),
                            Object(je.jsx)(it, {
                              to: '/register',
                              children: 'Health Services',
                            }),
                            Object(je.jsx)(it, {
                              to: '/register',
                              children: 'Ambulances',
                            }),
                            Object(je.jsx)(it, {
                              to: '/register',
                              children: 'Add Business',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(je.jsx)(ct, {
                  children: Object(je.jsxs)(ot, {
                    children: [
                      Object(je.jsx)('p', { children: 'Mshauri' }),
                      Object(je.jsxs)(st, {
                        children: [
                          ' ',
                          'Mshauri ',
                          new Date().getFullYear(),
                          ' All rights reserved',
                        ],
                      }),
                      Object(je.jsxs)(lt, {
                        children: [
                          Object(je.jsxs)(dt, {
                            href: 'https://www.facebook.com/ongatarongaionline/',
                            target: '_blank ',
                            'arial-label': 'Facebook',
                            children: [' ', Object(je.jsx)(ln.g, {})],
                          }),
                          Object(je.jsx)(dt, {
                            href: '/',
                            target: '_blank ',
                            'arial-label': 'Instagram',
                            children: Object(je.jsx)(ln.h, {}),
                          }),
                          Object(je.jsxs)(dt, {
                            href: 'https://www.youtube.com/channel/UC1-Ny_Vuh3dYsG63McDtHwg',
                            target: '_blank ',
                            'arial-label': 'Youtube',
                            children: [' ', Object(je.jsx)(ln.p, {})],
                          }),
                          Object(je.jsxs)(dt, {
                            href: 'https://www.twitter.com/ongatarongaionline/ ',
                            target: '_blank ',
                            'arial-label': 'Twitter',
                            children: [' ', Object(je.jsx)(ln.m, {})],
                          }),
                          Object(je.jsxs)(dt, {
                            href: 'https://www.linkedin.com/company/ongata-rongai-online/',
                            target: '_blank ',
                            'arial-label': 'LinkedIn',
                            children: [' ', Object(je.jsx)(ln.i, {})],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        },
        pt = [
          {
            id: 1,
            title: 'Ambulance service provider asked for more payment',
            info: 'We are really sorry to hear what happened.  Before reporting this incident, if you order ambulance, doctor or health services, you can try contacting the service provider first by sending a chat to the service provider up to 2 hours after the order is completed from the my bookings page on the mobile app.',
          },
          {
            id: 2,
            title: 'How do I change my My Page password?',
            info: 'We are really sorry to hear what happened.  Before reporting this incident, if you order ambulance, doctor or health services, you can try contacting the service provider first by sending a chat to the service provider up to 2 hours after the order is completed from the my bookings page on the mobile app.',
          },
          {
            id: 3,
            title: 'Service provider was impolite',
            info: 'We are really sorry to hear what happened.  Before reporting this incident, if you order ambulance, doctor or health services, you can try contacting the service provider first by sending a chat to the service provider up to 2 hours after the order is completed from the my bookings page on the mobile app.',
          },
          {
            id: 4,
            title: 'Ambulance service provider drove unsafely',
            info: 'We are really sorry to hear what happened.  Before reporting this incident, if you order ambulance, doctor or health services, you can try contacting the service provider first by sending a chat to the service provider up to 2 hours after the order is completed from the my bookings page on the mobile app.',
          },
          {
            id: 5,
            title: 'When do I recieve a password ordered by letter?',
            info: 'We are really sorry to hear what happened.  Before reporting this incident, if you order ambulance, doctor or health services, you can try contacting the service provider first by sending a chat to the service provider up to 2 hours after the order is completed from the my bookings page on the mobile app ',
          },
          {
            id: 6,
            title:
              'Pharmacy has completed my order status without delivering it',
            info: 'We are really sorry to hear what happened.  Before reporting this incident, if you order ambulance, doctor or health services, you can try contacting the service provider first by sending a chat to the service provider up to 2 hours after the order is completed from the my bookings page on the mobile app ',
          },
        ],
        jt = t(126),
        ht = function (e) {
          var n = e.title,
            t = e.info,
            a = Object(J.useState)(!1),
            r = Object(ve.a)(a, 2),
            i = r[0],
            c = r[1]
          return Object(je.jsxs)('article', {
            className: 'question',
            children: [
              Object(je.jsxs)('header', {
                children: [
                  Object(je.jsx)('h4', { children: n }),
                  Object(je.jsx)('button', {
                    className: 'btn',
                    onClick: function () {
                      return c(!i)
                    },
                    children: i
                      ? Object(je.jsx)(jt.a, {})
                      : Object(je.jsx)(jt.b, {}),
                  }),
                ],
              }),
              i && Object(je.jsx)('p', { children: t }),
            ],
          })
        }
      function mt() {
        var e = Object(J.useState)(pt),
          n = Object(ve.a)(e, 2),
          t = n[0]
        n[1]
        return Object(je.jsxs)('main', {
          children: [
            Object(je.jsx)('br', {}),
            Object(je.jsxs)('div', {
              className: 'container',
              children: [
                Object(je.jsx)('h3', {
                  children: 'questions and answers about Mshauri',
                }),
                Object(je.jsx)('section', {
                  className: 'info',
                  children: t.map(function (e) {
                    return Object(je.jsx)(ht, Object(M.a)({}, e), e.id)
                  }),
                }),
              ],
            }),
          ],
        })
      }
      var gt,
        ut,
        xt,
        Ot,
        ft = function () {
          return Object(je.jsxs)(je.Fragment, {
            children: [
              Object(je.jsxs)(_, {
                children: [
                  Object(je.jsxs)('nav', {
                    children: [
                      Object(je.jsx)('img', {
                        src: $,
                        alt: 'Mshauri',
                        className: 'img-logo ',
                      }),
                      '  ',
                      Object(je.jsx)('span', {
                        className: 'logo-text',
                        children: 'Mshauri',
                      }),
                    ],
                  }),
                  Object(je.jsxs)('div', {
                    className: 'container page',
                    children: [
                      Object(je.jsxs)('div', {
                        className: 'info',
                        children: [
                          Object(je.jsxs)('h1', {
                            children: [
                              'Emed',
                              Object(je.jsx)('span', { children: 'Africa' }),
                            ],
                          }),
                          Object(je.jsx)('p', {
                            children:
                              'Simpler, more efficient and more effective way for patients to find verified health service providers they love and a smarter way for health service providers to find fantastic patients.',
                          }),
                          Object(je.jsx)(G.b, {
                            to: '/register',
                            className: 'btn btn-hero',
                            children: 'Get Started',
                          }),
                          Object(je.jsx)('br', {}),
                          Object(je.jsx)('p', {}),
                          Object(je.jsx)('h4', {
                            children: 'Download the Mshauri app today!',
                          }),
                          Object(je.jsxs)('div', {
                            className: 'store',
                            children: [
                              Object(je.jsx)('img', {
                                src: 'data:image/jpeg;base64,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',
                                alt: 'Mshauri',
                                className: 'img ',
                              }),
                              Object(je.jsx)('img', {
                                src: 'data:image/png;base64,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',
                                alt: 'Mshauri',
                                className: 'img',
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(je.jsx)('img', {
                        src: Y,
                        alt: 'Mshauri',
                        className: 'img main-img',
                      }),
                    ],
                  }),
                ],
              }),
              Object(je.jsx)(he, Object(M.a)({}, ue)),
              Object(je.jsx)(mt, {}),
              Object(je.jsx)(he, Object(M.a)({}, xe)),
            ],
          })
        },
        vt = t.p + 'static/media/not-found.5eb3e644.svg',
        yt = V.a.main(
          gt ||
            (gt = Object(Z.a)([
              '\n  text-align: center;\n  img {\n    max-width: 600px;\n    display: block;\n    margin-bottom: 2rem;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  h3 {\n    margin-bottom: 0.5rem;\n  }\n  p {\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n    color: var(--grey-500);\n  }\n  a {\n    color: var(--primary-500);\n    text-decoration: underline;\n    text-transform: capitalize;\n  }\n',
            ]))
        ),
        wt = function () {
          return Object(je.jsx)(yt, {
            className: 'full-page',
            children: Object(je.jsxs)('div', {
              children: [
                Object(je.jsx)('img', { src: vt, alt: 'not found' }),
                Object(je.jsx)('h3', { children: 'Ohh! page not found' }),
                Object(je.jsx)('p', {
                  children: "We can't seem to find the page you're looking for",
                }),
                Object(je.jsx)(G.b, { to: '/', children: 'back home' }),
              ],
            }),
          })
        },
        At = V.a.section(
          ut ||
            (ut = Object(Z.a)([
              '\n  display: grid;\n  align-items: center;\n  .logo {\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 1.38rem;\n  }\n  .form {\n    max-width: 400px;\n    border-top: 5px solid var(--primary-500);\n  }\n\n  h3 {\n    text-align: center;\n  }\n  p {\n    margin: 0;\n    margin-top: 1rem;\n    text-align: center;\n  }\n  .btn {\n    margin-top: 1rem;\n  }\n  .member-btn {\n    background: transparent;\n    border: transparent;\n    color: var(--primary-500);\n    cursor: pointer;\n    letter-spacing: var(--letterSpacing);\n  }\n',
            ]))
        ),
        Ct = { name: '', email: '', password: '', isMember: !0 },
        Et = function () {
          var e = Object(Q.h)(),
            n = Object(J.useState)(Ct),
            t = Object(ve.a)(n, 2),
            a = t[0],
            r = t[1],
            i = rn(),
            c = i.user,
            o = i.isLoading,
            s = i.showAlert,
            l = i.displayAlert,
            d = i.setupUser,
            b = function (e) {
              r(
                Object(M.a)(
                  Object(M.a)({}, a),
                  {},
                  Object(ye.a)({}, e.target.name, e.target.value)
                )
              )
            }
          return (
            Object(J.useEffect)(
              function () {
                c &&
                  setTimeout(function () {
                    e('/')
                  }, 3e3)
              },
              [c, e]
            ),
            Object(je.jsx)(At, {
              className: 'full-page',
              children: Object(je.jsxs)('form', {
                className: 'form',
                onSubmit: function (e) {
                  e.preventDefault()
                  var n = a.name,
                    t = a.email,
                    r = a.password,
                    i = a.isMember
                  if (t && r && (i || n)) {
                    var c = { name: n, email: t, password: r }
                    d(
                      i
                        ? {
                            currentUser: c,
                            endPoint: 'login',
                            alertText: 'Login Successful! Redirecting...',
                          }
                        : {
                            currentUser: c,
                            endPoint: 'register',
                            alertText: 'User Created! Redirecting...',
                          }
                    )
                  } else l()
                },
                children: [
                  Object(je.jsxs)('div', {
                    className: 'info',
                    children: [
                      Object(je.jsxs)('h3', {
                        children: [
                          'Emed',
                          Object(je.jsx)('span', { children: 'Africa' }),
                        ],
                      }),
                      Object(je.jsx)('p', {
                        children:
                          'Simpler, more efficient and more effective way for patients to find verified health service providers they love and a smarter way for health service providers to find fantastic patients.',
                      }),
                    ],
                  }),
                  Object(je.jsx)('h3', {
                    children: a.isMember ? 'Login' : 'Register',
                  }),
                  s && Object(je.jsx)(cn, {}),
                  !a.isMember &&
                    Object(je.jsx)(In, {
                      type: 'text',
                      name: 'name',
                      value: a.name,
                      handleChange: b,
                    }),
                  Object(je.jsx)(In, {
                    type: 'email',
                    name: 'email',
                    value: a.email,
                    handleChange: b,
                  }),
                  Object(je.jsx)(In, {
                    type: 'password',
                    name: 'password',
                    value: a.password,
                    handleChange: b,
                  }),
                  Object(je.jsx)('button', {
                    type: 'submit',
                    className: 'btn btn-block',
                    disabled: o,
                    children: 'submit',
                  }),
                  Object(je.jsxs)('p', {
                    children: [
                      a.isMember ? 'Not a member yet?' : 'Already a member?',
                      Object(je.jsx)('button', {
                        type: 'button',
                        onClick: function () {
                          r(
                            Object(M.a)(
                              Object(M.a)({}, a),
                              {},
                              { isMember: !a.isMember }
                            )
                          )
                        },
                        className: 'member-btn',
                        children: a.isMember ? 'Register' : 'Login',
                      }),
                    ],
                  }),
                ],
              }),
            })
          )
        },
        kt = function (e) {
          var n = e.children
          return rn().user ? n : Object(je.jsx)(Q.a, { to: '/landing' })
        },
        It = V.a.section(
          xt ||
            (xt = Object(Z.a)([
              '\n  border-radius: var(--borderRadius);\n  width: 100%;\n  background: var(--white);\n  padding: 3rem 2rem 4rem;\n  box-shadow: var(--shadow-2);\n  h3 {\n    margin-top: 0;\n  }\n  .form {\n    margin: 0;\n    border-radius: 0;\n    box-shadow: none;\n    padding: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n  .form-row {\n    margin-bottom: 0;\n  }\n  .form-center {\n    display: grid;\n    row-gap: 0.5rem;\n  }\n  .form-center button {\n    align-self: end;\n    height: 35px;\n    margin-top: 1rem;\n  }\n  .btn-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 1rem;\n    align-self: flex-end;\n    margin-top: 0.5rem;\n    button {\n      height: 35px;\n    }\n  }\n  .clear-btn {\n    background: var(--grey-500);\n  }\n  .clear-btn:hover {\n    background: var(--black);\n  }\n  @media (min-width: 992px) {\n    .form-center {\n      grid-template-columns: 1fr 1fr;\n      align-items: center;\n      column-gap: 1rem;\n    }\n    .btn-container {\n      margin-top: 0;\n    }\n  }\n  @media (min-width: 1120px) {\n    .form-center {\n      grid-template-columns: 1fr 1fr 1fr;\n    }\n    .form-center button {\n      margin-top: 0;\n    }\n  }\n',
            ]))
        ),
        Tt = function () {
          var e = rn(),
            n = e.isLoading,
            t = e.isEditing,
            a = e.showAlert,
            r = e.displayAlert,
            i = e.position,
            c = e.company,
            o = e.jobLocation,
            s = e.jobType,
            l = e.jobTypeOptions,
            d = (e.status, e.statusOptions, e.handleChange),
            b = e.clearValues,
            p = e.createJob,
            j = e.editJob,
            h = function (e) {
              var n = e.target.name,
                t = e.target.value
              d({ name: n, value: t })
            }
          return Object(je.jsx)(It, {
            children: Object(je.jsxs)('form', {
              className: 'form',
              children: [
                Object(je.jsx)('h3', {
                  children: t ? 'edit service ' : 'add service',
                }),
                a && Object(je.jsx)(cn, {}),
                Object(je.jsxs)('div', {
                  className: 'form-center',
                  children: [
                    Object(je.jsx)(In, {
                      type: 'text',
                      labelText: 'name',
                      name: 'position',
                      value: i,
                      handleChange: h,
                    }),
                    Object(je.jsx)(In, {
                      type: 'text',
                      labelText: 'description',
                      name: 'company',
                      value: c,
                      handleChange: h,
                    }),
                    Object(je.jsx)(In, {
                      type: 'text',
                      labelText: 'what3words',
                      name: 'jobLocation',
                      value: o,
                      handleChange: h,
                    }),
                    Object(je.jsx)(Tn, {
                      name: 'jobType',
                      labelText: 'Service type',
                      value: s,
                      handleChange: h,
                      list: l,
                    }),
                    Object(je.jsxs)('div', {
                      className: 'btn-container',
                      children: [
                        Object(je.jsx)('button', {
                          type: 'submit',
                          className: 'btn btn-block submit-btn',
                          onClick: function (e) {
                            e.preventDefault(),
                              i && c && o ? (t ? j() : p()) : r()
                          },
                          disabled: n,
                          children: 'submit',
                        }),
                        Object(je.jsx)('button', {
                          className: 'btn btn-block clear-btn',
                          onClick: function (e) {
                            e.preventDefault(), b()
                          },
                          children: 'clear',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        Bt = function () {
          return Object(je.jsxs)(je.Fragment, {
            children: [Object(je.jsx)(Qn, {}), Object(je.jsx)(Jn, {})],
          })
        },
        Nt = function () {
          var e = rn(),
            n = e.user,
            t = e.showAlert,
            a = e.displayAlert,
            r = e.updateUser,
            i = e.isLoading,
            c = Object(J.useState)(
              null === n || void 0 === n ? void 0 : n.name
            ),
            o = Object(ve.a)(c, 2),
            s = o[0],
            l = o[1],
            d = Object(J.useState)(
              null === n || void 0 === n ? void 0 : n.email
            ),
            b = Object(ve.a)(d, 2),
            p = b[0],
            j = b[1],
            h = Object(J.useState)(
              null === n || void 0 === n ? void 0 : n.lastName
            ),
            m = Object(ve.a)(h, 2),
            g = m[0],
            u = m[1],
            x = Object(J.useState)(
              null === n || void 0 === n ? void 0 : n.location
            ),
            O = Object(ve.a)(x, 2),
            f = O[0],
            v = O[1]
          return Object(je.jsx)(It, {
            children: Object(je.jsxs)('form', {
              className: 'form',
              onSubmit: function (e) {
                e.preventDefault(),
                  s && p && g && f
                    ? r({ name: s, email: p, lastName: g, location: f })
                    : a()
              },
              children: [
                Object(je.jsx)('h3', { children: 'profile' }),
                t && Object(je.jsx)(cn, {}),
                Object(je.jsxs)('div', {
                  className: 'form-center',
                  children: [
                    Object(je.jsx)(In, {
                      type: 'text',
                      name: 'name',
                      value: s,
                      handleChange: function (e) {
                        return l(e.target.value)
                      },
                    }),
                    Object(je.jsx)(In, {
                      type: 'text',
                      labelText: 'last name',
                      name: 'lastName',
                      value: g,
                      handleChange: function (e) {
                        return u(e.target.value)
                      },
                    }),
                    Object(je.jsx)(In, {
                      type: 'email',
                      name: 'email',
                      value: p,
                      handleChange: function (e) {
                        return j(e.target.value)
                      },
                    }),
                    Object(je.jsx)(In, {
                      type: 'text',
                      name: 'location',
                      value: f,
                      handleChange: function (e) {
                        return v(e.target.value)
                      },
                    }),
                    Object(je.jsx)('button', {
                      className: 'btn btn-block',
                      type: 'submit',
                      disabled: i,
                      children: i ? 'Please Wait...' : 'save changes',
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        Rt = V.a.section(
          Ot ||
            (Ot = Object(Z.a)([
              '\n  .dashboard {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .dashboard-page {\n    width: 90vw;\n    margin: 0 auto;\n    padding: 2rem 0;\n  }\n  @media (min-width: 992px) {\n    .dashboard {\n      grid-template-columns: auto 1fr;\n    }\n    .dashboard-page {\n      width: 90%;\n    }\n  }\n',
            ]))
        ),
        St = function () {
          return Object(je.jsx)(Rt, {
            children: Object(je.jsxs)('main', {
              className: 'dashboard',
              children: [
                Object(je.jsx)(Yn, {}),
                Object(je.jsx)(hn, {}),
                Object(je.jsxs)('div', {
                  children: [
                    Object(je.jsx)(zn, {}),
                    Object(je.jsx)('div', {
                      className: 'dashboard-page',
                      children: Object(je.jsx)(Q.b, {}),
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        Lt = function () {
          var e = rn(),
            n = e.showStats,
            t = e.isLoading,
            a = e.monthlyApplications
          return (
            Object(J.useEffect)(function () {
              n()
            }, []),
            t
              ? Object(je.jsx)(Bn, { center: !0 })
              : Object(je.jsxs)(je.Fragment, {
                  children: [
                    Object(je.jsx)(_n, {}),
                    a.length > 0 && Object(je.jsx)(kn, {}),
                  ],
                })
          )
        }
      var Ut = function () {
        return Object(je.jsxs)(G.a, {
          children: [
            Object(je.jsxs)(Q.e, {
              children: [
                Object(je.jsxs)(Q.c, {
                  path: '/',
                  element: Object(je.jsx)(kt, {
                    children: Object(je.jsx)(St, {}),
                  }),
                  children: [
                    Object(je.jsx)(Q.c, {
                      index: !0,
                      element: Object(je.jsx)(Lt, {}),
                    }),
                    Object(je.jsx)(Q.c, {
                      path: 'all-jobs',
                      element: Object(je.jsx)(Bt, {}),
                    }),
                    Object(je.jsx)(Q.c, {
                      path: 'add-job',
                      element: Object(je.jsx)(Tt, {}),
                    }),
                    Object(je.jsx)(Q.c, {
                      path: 'profile',
                      element: Object(je.jsx)(Nt, {}),
                    }),
                  ],
                }),
                Object(je.jsx)(Q.c, {
                  path: '/register',
                  element: Object(je.jsx)(Et, {}),
                }),
                Object(je.jsx)(Q.c, {
                  path: '/landing',
                  element: Object(je.jsx)(ft, {}),
                }),
                Object(je.jsx)(Q.c, {
                  path: '*',
                  element: Object(je.jsx)(wt, {}),
                }),
              ],
            }),
            Object(je.jsx)(bt, {}),
          ],
        })
      }
      F.a.render(
        Object(je.jsx)(P.a.StrictMode, {
          children: Object(je.jsx)(an, { children: Object(je.jsx)(Ut, {}) }),
        }),
        document.getElementById('root')
      )
    },
  },
  [[362, 1, 2]],
])
//# sourceMappingURL=main.b8537427.chunk.js.map
