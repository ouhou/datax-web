(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-68a1f7ea"], {
    "332f": function (e, t, a) {
    }, "3b2e": function (e, t, a) {
    }, 6350: function (e, t, a) {
        "use strict";
        a("332f")
    }, "6a15": function (e, t, a) {
    }, "7f76": function (e, t, a) {
        "use strict";
        a("ce55")
    }, "8f79": function (e, t, a) {
        "use strict";
        a.r(t);
        var l = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "app-container"}, [a("div", {staticClass: "filter-container"}, [a("el-input", {
                    staticClass: "filter-item",
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "任务名称"},
                    model: {
                        value: e.listQuery.jobDesc, callback: function (t) {
                            e.$set(e.listQuery, "jobDesc", t)
                        }, expression: "listQuery.jobDesc"
                    }
                }), e._v(" "), a("el-select", {
                    staticClass: "filter-item",
                    attrs: {multiple: "", placeholder: "所属项目"},
                    model: {
                        value: e.projectIds, callback: function (t) {
                            e.projectIds = t
                        }, expression: "projectIds"
                    }
                }, e._l(e.jobProjectList, (function (e) {
                    return a("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                })), 1), e._v(" "), a("el-select", {
                    staticClass: "filter-item",
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "任务类型"},
                    model: {
                        value: e.listQuery.glueType, callback: function (t) {
                            e.$set(e.listQuery, "glueType", t)
                        }, expression: "listQuery.glueType"
                    }
                }, e._l(e.glueTypes, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1), e._v(" "), a("el-button", {
                    directives: [{name: "waves", rawName: "v-waves"}],
                    staticClass: "filter-item",
                    attrs: {type: "primary", icon: "el-icon-search"},
                    on: {click: e.fetchData}
                }, [e._v("\n      搜索\n    ")]), e._v(" "), a("el-button", {
                    staticClass: "filter-item",
                    staticStyle: {"margin-left": "10px"},
                    attrs: {type: "primary", icon: "el-icon-edit"},
                    on: {click: e.handleCreate}
                }, [e._v("\n      添加\n    ")])], 1), e._v(" "), a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.listLoading,
                        expression: "listLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.list,
                        "element-loading-text": "Loading",
                        border: "",
                        fit: "",
                        "highlight-current-row": "",
                        size: "medium"
                    }
                }, [a("el-table-column", {
                    attrs: {align: "center", label: "ID", width: "80"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.id))]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "任务名称", align: "center"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.jobDesc))]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "所属项目", align: "center", width: "120"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.projectName))]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "Cron", align: "center", width: "120"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("span", [e._v(e._s(t.row.jobCron))])]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "路由策略", align: "center", width: "130"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(" " + e._s(e.routeStrategies.find((function (e) {
                                return e.value === t.row.executorRouteStrategy
                            })).label))]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "状态", align: "center", width: "150"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-switch", {
                                attrs: {
                                    "active-color": "#00A854",
                                    "active-text": "启动",
                                    "active-value": 1,
                                    "inactive-color": "#F04134",
                                    "inactive-text": "停止",
                                    "inactive-value": 0
                                }, on: {
                                    change: function (a) {
                                        return e.changeSwitch(t.row)
                                    }
                                }, model: {
                                    value: t.row.triggerStatus, callback: function (a) {
                                        e.$set(t.row, "triggerStatus", a)
                                    }, expression: "scope.row.triggerStatus"
                                }
                            })]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "注册节点", align: "center", width: "100"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-popover", {
                                attrs: {placement: "bottom", width: "500"}, on: {
                                    show: function (a) {
                                        return e.loadById(t.row)
                                    }
                                }
                            }, [a("el-table", {attrs: {data: e.registerNode}}, [a("el-table-column", {
                                attrs: {
                                    width: "150",
                                    property: "title",
                                    label: "执行器名称"
                                }
                            }), e._v(" "), a("el-table-column", {
                                attrs: {
                                    width: "150",
                                    property: "appName",
                                    label: "appName"
                                }
                            }), e._v(" "), a("el-table-column", {
                                attrs: {
                                    width: "150",
                                    property: "registryList",
                                    label: "机器地址"
                                }
                            })], 1), e._v(" "), a("el-button", {
                                attrs: {slot: "reference", size: "small"},
                                slot: "reference"
                            }, [e._v("查看")])], 1)]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "下次触发时间", align: "center", width: "120"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-popover", {
                                attrs: {placement: "bottom", width: "300"}, on: {
                                    show: function (a) {
                                        return e.nextTriggerTime(t.row)
                                    }
                                }
                            }, [a("h5", {domProps: {innerHTML: e._s(e.triggerNextTimes)}}), e._v(" "), a("el-button", {
                                attrs: {
                                    slot: "reference",
                                    size: "small"
                                }, slot: "reference"
                            }, [e._v("查看")])], 1)]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "执行状态", align: "center", width: "80"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(" " + e._s(e.statusList.find((function (e) {
                                return e.value === t.row.lastHandleCode
                            })).label))]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "操作", align: "center", fixed: "right"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            var l = t.row;
                            return [a("el-dropdown", {attrs: {trigger: "click"}}, [a("span", {staticClass: "el-dropdown-link"}, [e._v("\n            操作"), a("i", {staticClass: "el-icon-arrow-down el-icon--right"})]), e._v(" "), a("el-dropdown-menu", {
                                attrs: {slot: "dropdown"},
                                slot: "dropdown"
                            }, [a("el-dropdown-item", {
                                nativeOn: {
                                    click: function (t) {
                                        return e.handlerExecute(l)
                                    }
                                }
                            }, [e._v("执行一次")]), e._v(" "), a("el-dropdown-item", {
                                nativeOn: {
                                    click: function (t) {
                                        return e.handlerViewLog(l)
                                    }
                                }
                            }, [e._v("查询日志")]), e._v(" "), a("el-dropdown-item", {
                                attrs: {divided: ""},
                                nativeOn: {
                                    click: function (t) {
                                        return e.handlerUpdate(l)
                                    }
                                }
                            }, [e._v("编辑")]), e._v(" "), a("el-dropdown-item", {
                                nativeOn: {
                                    click: function (t) {
                                        return e.handlerDelete(l)
                                    }
                                }
                            }, [e._v("删除")])], 1)], 1)]
                        }
                    }])
                })], 1), e._v(" "), a("pagination", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.total > 0,
                        expression: "total>0"
                    }],
                    attrs: {total: e.total, page: e.listQuery.current, limit: e.listQuery.size},
                    on: {
                        "update:page": function (t) {
                            return e.$set(e.listQuery, "current", t)
                        }, "update:limit": function (t) {
                            return e.$set(e.listQuery, "size", t)
                        }, pagination: e.fetchData
                    }
                }), e._v(" "), a("el-dialog", {
                    attrs: {
                        title: e.textMap[e.dialogStatus],
                        visible: e.dialogFormVisible,
                        width: "1000px",
                        "before-close": e.handleClose
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogFormVisible = t
                        }
                    }
                }, [a("el-form", {
                    ref: "dataForm",
                    attrs: {rules: e.rules, model: e.temp, "label-position": "left", "label-width": "110px"}
                }, [a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "执行器",
                        prop: "jobGroup"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "请选择执行器"},
                    model: {
                        value: e.temp.jobGroup, callback: function (t) {
                            e.$set(e.temp, "jobGroup", t)
                        }, expression: "temp.jobGroup"
                    }
                }, e._l(e.executorList, (function (e) {
                    return a("el-option", {key: e.id, attrs: {label: e.title, value: e.id}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "任务名称",
                        prop: "jobDesc"
                    }
                }, [a("el-input", {
                    attrs: {size: "medium", placeholder: "请输入任务描述"},
                    model: {
                        value: e.temp.jobDesc, callback: function (t) {
                            e.$set(e.temp, "jobDesc", t)
                        }, expression: "temp.jobDesc"
                    }
                })], 1)], 1)], 1), e._v(" "), a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "路由策略",
                        prop: "executorRouteStrategy"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "请选择路由策略"},
                    model: {
                        value: e.temp.executorRouteStrategy, callback: function (t) {
                            e.$set(e.temp, "executorRouteStrategy", t)
                        }, expression: "temp.executorRouteStrategy"
                    }
                }, e._l(e.routeStrategies, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-dialog", {
                    attrs: {
                        title: "提示",
                        visible: e.showCronBox,
                        width: "60%",
                        "append-to-body": ""
                    }, on: {
                        "update:visible": function (t) {
                            e.showCronBox = t
                        }
                    }
                }, [a("cron", {
                    model: {
                        value: e.temp.jobCron, callback: function (t) {
                            e.$set(e.temp, "jobCron", t)
                        }, expression: "temp.jobCron"
                    }
                }), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (t) {
                            e.showCronBox = !1
                        }
                    }
                }, [e._v("关闭")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"}, on: {
                        click: function (t) {
                            e.showCronBox = !1
                        }
                    }
                }, [e._v("确 定")])], 1)], 1), e._v(" "), a("el-form-item", {
                    attrs: {
                        label: "Cron",
                        prop: "jobCron"
                    }
                }, [a("el-input", {
                    attrs: {"auto-complete": "off", placeholder: "请输入Cron表达式"},
                    model: {
                        value: e.temp.jobCron, callback: function (t) {
                            e.$set(e.temp, "jobCron", t)
                        }, expression: "temp.jobCron"
                    }
                }, [e.showCronBox ? a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-open", title: "关闭图形配置"},
                    on: {
                        click: function (t) {
                            e.showCronBox = !1
                        }
                    },
                    slot: "append"
                }) : a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-turn-off", title: "打开图形配置"},
                    on: {
                        click: function (t) {
                            e.showCronBox = !0
                        }
                    },
                    slot: "append"
                })], 1)], 1)], 1)], 1), e._v(" "), a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "阻塞处理",
                        prop: "executorBlockStrategy"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "请选择阻塞处理策略"},
                    model: {
                        value: e.temp.executorBlockStrategy, callback: function (t) {
                            e.$set(e.temp, "executorBlockStrategy", t)
                        }, expression: "temp.executorBlockStrategy"
                    }
                }, e._l(e.blockStrategies, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "报警邮件"}}, [a("el-input", {
                    attrs: {placeholder: "请输入报警邮件，多个用逗号分隔"},
                    model: {
                        value: e.temp.alarmEmail, callback: function (t) {
                            e.$set(e.temp, "alarmEmail", t)
                        }, expression: "temp.alarmEmail"
                    }
                })], 1)], 1)], 1), e._v(" "), a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "任务类型",
                        prop: "glueType"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "任务脚本类型"},
                    model: {
                        value: e.temp.glueType, callback: function (t) {
                            e.$set(e.temp, "glueType", t)
                        }, expression: "temp.glueType"
                    }
                }, e._l(e.glueTypes, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "失败重试次数"}}, [a("el-input-number", {
                    attrs: {
                        min: 0,
                        max: 20
                    }, model: {
                        value: e.temp.executorFailRetryCount, callback: function (t) {
                            e.$set(e.temp, "executorFailRetryCount", t)
                        }, expression: "temp.executorFailRetryCount"
                    }
                })], 1)], 1)], 1), e._v(" "), a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "所属项目",
                        prop: "projectId"
                    }
                }, [a("el-select", {
                    staticClass: "filter-item",
                    attrs: {placeholder: "所属项目"},
                    model: {
                        value: e.temp.projectId, callback: function (t) {
                            e.$set(e.temp, "projectId", t)
                        }, expression: "temp.projectId"
                    }
                }, e._l(e.jobProjectList, (function (e) {
                    return a("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "超时时间(分钟)"}}, [a("el-input-number", {
                    attrs: {
                        min: 0,
                        max: 120
                    }, model: {
                        value: e.temp.executorTimeout, callback: function (t) {
                            e.$set(e.temp, "executorTimeout", t)
                        }, expression: "temp.executorTimeout"
                    }
                })], 1)], 1)], 1), e._v(" "), a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "子任务"}}, [a("el-select", {
                    attrs: {
                        multiple: "",
                        placeholder: "子任务",
                        "value-key": "id"
                    }, model: {
                        value: e.temp.childJobId, callback: function (t) {
                            e.$set(e.temp, "childJobId", t)
                        }, expression: "temp.childJobId"
                    }
                }, e._l(e.jobIdList, (function (e) {
                    return a("el-option", {key: e.id, attrs: {label: e.jobDesc, value: e}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "executorHandler"}}, [a("el-input", {
                    attrs: {placeholder: "executorJobHandler/datawebhandler"},
                    model: {
                        value: e.temp.executorHandler, callback: function (t) {
                            e.$set(e.temp, "executorHandler", t)
                        }, expression: "temp.executorHandler"
                    }
                })], 1)], 1)], 1), e._v(" "), "BEAN" === e.temp.glueType ? a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "辅助参数",
                        prop: "incrementType"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "请选择参数类型", value: ""},
                    model: {
                        value: e.temp.incrementType, callback: function (t) {
                            e.$set(e.temp, "incrementType", t)
                        }, expression: "temp.incrementType"
                    }
                }, e._l(e.incrementTypes, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1)], 1) : e._e(), e._v(" "), "BEAN" === e.temp.glueType && 1 === e.temp.incrementType ? a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "增量主键开始ID",
                        prop: "incStartId"
                    }
                }, [a("el-input", {
                    staticStyle: {width: "56%"},
                    attrs: {placeholder: "首次增量使用"},
                    model: {
                        value: e.temp.incStartId, callback: function (t) {
                            e.$set(e.temp, "incStartId", t)
                        }, expression: "temp.incStartId"
                    }
                })], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "ID增量参数",
                        prop: "replaceParam"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "-DstartId='%s' -DendId='%s'"},
                    model: {
                        value: e.temp.replaceParam, callback: function (t) {
                            e.$set(e.temp, "replaceParam", t)
                        }, expression: "temp.replaceParam"
                    }
                })], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "reader数据源",
                        prop: "datasourceId"
                    }
                }, [a("el-select", {
                    staticClass: "filter-item",
                    attrs: {placeholder: "reader数据源"},
                    model: {
                        value: e.temp.datasourceId, callback: function (t) {
                            e.$set(e.temp, "datasourceId", t)
                        }, expression: "temp.datasourceId"
                    }
                }, e._l(e.dataSourceList, (function (e) {
                    return a("el-option", {key: e.id, attrs: {label: e.datasourceName, value: e.id}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 7}}, [a("el-form-item", {
                    attrs: {
                        label: "reader表",
                        prop: "readerTable"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "读表的表名"},
                    model: {
                        value: e.temp.readerTable, callback: function (t) {
                            e.$set(e.temp, "readerTable", t)
                        }, expression: "temp.readerTable"
                    }
                })], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 5}}, [a("el-form-item", {
                    attrs: {
                        label: "主键",
                        "label-width": "40px",
                        prop: "primaryKey"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "请填写主键字段名"},
                    model: {
                        value: e.temp.primaryKey, callback: function (t) {
                            e.$set(e.temp, "primaryKey", t)
                        }, expression: "temp.primaryKey"
                    }
                })], 1)], 1)], 1) : e._e(), e._v(" "), "BEAN" === e.temp.glueType && 2 === e.temp.incrementType ? a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "增量开始时间",
                        prop: "incStartTime"
                    }
                }, [a("el-date-picker", {
                    staticStyle: {width: "57%"},
                    attrs: {type: "datetime", placeholder: "首次增量使用", format: "yyyy-MM-dd HH:mm:ss"},
                    model: {
                        value: e.temp.incStartTime, callback: function (t) {
                            e.$set(e.temp, "incStartTime", t)
                        }, expression: "temp.incStartTime"
                    }
                })], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "增量时间字段",
                        prop: "replaceParam"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "-DlastTime='%s' -DcurrentTime='%s'"},
                    model: {
                        value: e.temp.replaceParam, callback: function (t) {
                            e.$set(e.temp, "replaceParam", t)
                        }, expression: "temp.replaceParam"
                    }
                })], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "增量时间格式",
                        prop: "replaceParamType"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "增量时间格式"},
                    on: {change: e.incStartTimeFormat},
                    model: {
                        value: e.temp.replaceParamType, callback: function (t) {
                            e.$set(e.temp, "replaceParamType", t)
                        }, expression: "temp.replaceParamType"
                    }
                }, e._l(e.replaceFormatTypes, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1)], 1) : e._e(), e._v(" "), "BEAN" === e.temp.glueType && 3 === e.temp.incrementType ? a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 12}}, [a("el-form-item", {
                    attrs: {
                        label: "分区字段",
                        prop: "partitionField"
                    }
                }, [a("el-input", {
                    staticStyle: {width: "56%"},
                    attrs: {placeholder: "请输入分区字段"},
                    model: {
                        value: e.partitionField, callback: function (t) {
                            e.partitionField = t
                        }, expression: "partitionField"
                    }
                })], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 7}}, [a("el-form-item", {attrs: {label: "分区时间"}}, [a("el-select", {
                    attrs: {placeholder: "分区时间格式"},
                    model: {
                        value: e.timeFormatType, callback: function (t) {
                            e.timeFormatType = t
                        }, expression: "timeFormatType"
                    }
                }, e._l(e.timeFormatTypes, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1), e._v(" "), a("el-col", {attrs: {span: 5}}, [a("el-input-number", {
                    staticStyle: {width: "65%"},
                    attrs: {min: -20, max: 0},
                    model: {
                        value: e.timeOffset, callback: function (t) {
                            e.timeOffset = t
                        }, expression: "timeOffset"
                    }
                })], 1)], 1) : e._e(), e._v(" "), "BEAN" === e.temp.glueType ? a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 24}}, [a("el-form-item", {attrs: {label: "JVM启动参数"}}, [a("el-input", {
                    attrs: {placeholder: "-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError"},
                    model: {
                        value: e.temp.jvmParam, callback: function (t) {
                            e.$set(e.temp, "jvmParam", t)
                        }, expression: "temp.jvmParam"
                    }
                })], 1)], 1)], 1) : e._e()], 1), e._v(" "), "BEAN" === e.temp.glueType ? a("json-editor", {
                    ref: "jsonEditor",
                    model: {
                        value: e.jobJson, callback: function (t) {
                            e.jobJson = t
                        }, expression: "jobJson"
                    }
                }) : e._e(), e._v(" "), "GLUE_SHELL" === e.temp.glueType ? a("shell-editor", {
                    ref: "shellEditor",
                    model: {
                        value: e.glueSource, callback: function (t) {
                            e.glueSource = t
                        }, expression: "glueSource"
                    }
                }) : e._e(), e._v(" "), "GLUE_PYTHON" === e.temp.glueType ? a("python-editor", {
                    ref: "pythonEditor",
                    model: {
                        value: e.glueSource, callback: function (t) {
                            e.glueSource = t
                        }, expression: "glueSource"
                    }
                }) : e._e(), e._v(" "), "GLUE_POWERSHELL" === e.temp.glueType ? a("powershell-editor", {
                    ref: "powershellEditor",
                    model: {
                        value: e.glueSource, callback: function (t) {
                            e.glueSource = t
                        }, expression: "glueSource"
                    }
                }) : e._e(), e._v(" "), a("div", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (t) {
                            e.dialogFormVisible = !1
                        }
                    }
                }, [e._v("\n        取消\n      ")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {
                        click: function (t) {
                            "create" === e.dialogStatus ? e.createData() : e.updateData()
                        }
                    }
                }, [e._v("\n        确定\n      ")])], 1)], 1)], 1)
            }, r = [], o = (a("28a5"), a("6b54"), a("39ed")), i = a("2b10"), n = a("6724"), s = a("5ec8"), u = a("333d"),
            c = a("fa7e"), p = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "shell-editor"}, [a("textarea", {ref: "textarea"})])
            }, d = [], m = a("56b3"), f = a.n(m);
        a("0dd0"), a("a7be"), a("acdf"), a("f9d4"), a("8822");
        a("02f0");
        var h = {
                name: "ShellEditor", props: ["value"], data: function () {
                    return {shellEditor: !1}
                }, watch: {
                    value: function (e) {
                        var t = this.shellEditor.getValue();
                        e !== t && this.shellEditor.setValue(this.value)
                    }
                }, mounted: function () {
                    var e = this;
                    this.shellEditor = f.a.fromTextArea(this.$refs.textarea, {
                        lineNumbers: !0,
                        mode: "text/x-sh",
                        gutters: ["CodeMirror-lint-markers"],
                        theme: "rubyblue",
                        lint: !0
                    }), this.shellEditor.setValue(this.value ? this.value : ""), this.shellEditor.on("change", (function (t) {
                        e.$emit("changed", t.getValue()), e.$emit("input", t.getValue())
                    }))
                }, methods: {
                    getValue: function () {
                        return this.shellEditor.getValue()
                    }
                }
            }, b = h, v = (a("6350"), a("2877")), g = Object(v["a"])(b, p, d, !1, null, "b001ad70", null), y = g.exports,
            _ = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "python-editor"}, [a("textarea", {ref: "textarea"})])
            }, x = [];
        a("db91");
        var S = {
            name: "PythonEditor", props: ["value"], data: function () {
                return {pythonEditor: !1}
            }, watch: {
                value: function (e) {
                    var t = this.pythonEditor.getValue();
                    e !== t && this.pythonEditor.setValue(this.value)
                }
            }, mounted: function () {
                var e = this;
                this.pythonEditor = f.a.fromTextArea(this.$refs.textarea, {
                    lineNumbers: !0,
                    mode: "text/x-python",
                    gutters: ["CodeMirror-lint-markers"],
                    theme: "rubyblue",
                    lint: !0
                }), this.pythonEditor.setValue(this.value ? this.value : ""), this.pythonEditor.on("change", (function (t) {
                    e.$emit("changed", t.getValue()), e.$emit("input", t.getValue())
                }))
            }, methods: {
                getValue: function () {
                    return this.pythonEditor.getValue()
                }
            }
        }, j = S, w = (a("7f76"), Object(v["a"])(j, _, x, !1, null, "a3a66166", null)), T = w.exports, E = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "powershell-editor"}, [a("textarea", {ref: "textarea"})])
        }, k = [];
        a("9da3");
        var I = {
                name: "PowershellEditor", props: ["value"], data: function () {
                    return {powershellEditor: !1}
                }, watch: {
                    value: function (e) {
                        var t = this.powershellEditor.getValue();
                        e !== t && this.powershellEditor.setValue(this.value)
                    }
                }, mounted: function () {
                    var e = this;
                    this.powershellEditor = f.a.fromTextArea(this.$refs.textarea, {
                        lineNumbers: !0,
                        mode: "powershell",
                        gutters: ["CodeMirror-lint-markers"],
                        theme: "rubyblue",
                        lint: !0
                    }), this.powershellEditor.setValue(this.value ? this.value : ""), this.powershellEditor.on("change", (function (t) {
                        e.$emit("changed", t.getValue()), e.$emit("input", t.getValue())
                    }))
                }, methods: {
                    getValue: function () {
                        return this.powershellEditor.getValue()
                    }
                }
            }, $ = I, C = (a("dfa2"), Object(v["a"])($, E, k, !1, null, "456ba0b7", null)), L = C.exports, F = a("7e39"),
            J = a("a53d"), V = a("61f7"), D = {
                name: "JobInfo",
                components: {
                    Pagination: u["a"],
                    JsonEditor: c["a"],
                    ShellEditor: y,
                    PythonEditor: T,
                    PowershellEditor: L,
                    Cron: s["a"]
                },
                directives: {waves: n["a"]},
                filters: {
                    statusFilter: function (e) {
                        var t = {published: "success", draft: "gray", deleted: "danger"};
                        return t[e]
                    }
                },
                data: function () {
                    var e = this, t = function (e, t, a) {
                        t || a(new Error("Increment parameters is required")), a()
                    }, a = function (t, a, l) {
                        e.partitionField || l(new Error("Partition parameters is required")), l()
                    };
                    return {
                        projectIds: "",
                        list: null,
                        listLoading: !0,
                        total: 0,
                        listQuery: {
                            current: 1,
                            size: 10,
                            jobGroup: 0,
                            projectIds: "",
                            triggerStatus: -1,
                            jobDesc: "",
                            glueType: ""
                        },
                        showCronBox: !1,
                        dialogPluginVisible: !1,
                        pluginData: [],
                        dialogFormVisible: !1,
                        dialogStatus: "",
                        textMap: {update: "Edit", create: "Create"},
                        rules: {
                            jobGroup: [{required: !0, message: "jobGroup is required", trigger: "change"}],
                            executorRouteStrategy: [{
                                required: !0,
                                message: "executorRouteStrategy is required",
                                trigger: "change"
                            }],
                            executorBlockStrategy: [{
                                required: !0,
                                message: "executorBlockStrategy is required",
                                trigger: "change"
                            }],
                            glueType: [{required: !0, message: "jobType is required", trigger: "change"}],
                            projectId: [{required: !0, message: "projectId is required", trigger: "change"}],
                            jobDesc: [{required: !0, message: "jobDesc is required", trigger: "blur"}],
                            jobProject: [{required: !0, message: "jobProject is required", trigger: "blur"}],
                            jobCron: [{required: !0, message: "jobCron is required", trigger: "blur"}],
                            incStartId: [{trigger: "blur", validator: t}],
                            replaceParam: [{trigger: "blur", validator: t}],
                            primaryKey: [{trigger: "blur", validator: t}],
                            incStartTime: [{trigger: "change", validator: t}],
                            replaceParamType: [{trigger: "change", validator: t}],
                            partitionField: [{trigger: "blur", validator: a}],
                            datasourceId: [{trigger: "change", validator: t}],
                            readerTable: [{trigger: "blur", validator: t}]
                        },
                        temp: {
                            id: void 0,
                            jobGroup: "",
                            jobCron: "",
                            jobDesc: "",
                            executorRouteStrategy: "",
                            executorBlockStrategy: "",
                            childJobId: "",
                            executorFailRetryCount: "",
                            alarmEmail: "",
                            executorTimeout: "",
                            userId: 0,
                            jobConfigId: "",
                            executorHandler: "",
                            glueType: "",
                            glueSource: "",
                            jobJson: "",
                            executorParam: "",
                            replaceParam: "",
                            replaceParamType: "Timestamp",
                            jvmParam: "",
                            incStartTime: "",
                            partitionInfo: "",
                            incrementType: 0,
                            incStartId: "",
                            primaryKey: "",
                            projectId: "",
                            datasourceId: "",
                            readerTable: ""
                        },
                        resetTemp: function () {
                            this.temp = this.$options.data().temp, this.jobJson = "", this.glueSource = "", this.timeOffset = 0, this.timeFormatType = "yyyy-MM-dd", this.partitionField = ""
                        },
                        executorList: "",
                        jobIdList: "",
                        jobProjectList: "",
                        dataSourceList: "",
                        blockStrategies: [{value: "SERIAL_EXECUTION", label: "单机串行"}, {
                            value: "DISCARD_LATER",
                            label: "丢弃后续调度"
                        }, {value: "COVER_EARLY", label: "覆盖之前调度"}],
                        routeStrategies: [{value: "FIRST", label: "第一个"}, {
                            value: "LAST",
                            label: "最后一个"
                        }, {value: "ROUND", label: "轮询"}, {value: "RANDOM", label: "随机"}, {
                            value: "CONSISTENT_HASH",
                            label: "一致性HASH"
                        }, {value: "LEAST_FREQUENTLY_USED", label: "最不经常使用"}, {
                            value: "LEAST_RECENTLY_USED",
                            label: "最近最久未使用"
                        }, {value: "FAILOVER", label: "故障转移"}, {value: "BUSYOVER", label: "忙碌转移"}],
                        glueTypes: [{value: "BEAN", label: "BEAN任务"}, {
                            value: "GLUE_SHELL",
                            label: "Shell任务"
                        }, {value: "GLUE_PYTHON", label: "Python任务"}, {
                            value: "GLUE_POWERSHELL",
                            label: "PowerShell任务"
                        }],
                        incrementTypes: [{value: 0, label: "无"}, {value: 1, label: "主键自增"}, {
                            value: 2,
                            label: "时间自增"
                        }, {value: 3, label: "HIVE分区"}],
                        triggerNextTimes: "",
                        registerNode: [],
                        jobJson: "",
                        glueSource: "",
                        timeOffset: 0,
                        timeFormatType: "yyyy-MM-dd",
                        partitionField: "",
                        timeFormatTypes: [{value: "yyyy-MM-dd", label: "yyyy-MM-dd"}, {
                            value: "yyyyMMdd",
                            label: "yyyyMMdd"
                        }, {value: "yyyy/MM/dd", label: "yyyy/MM/dd"}],
                        replaceFormatTypes: [{value: "yyyy/MM/dd", label: "yyyy/MM/dd"}, {
                            value: "yyyy-MM-dd",
                            label: "yyyy-MM-dd"
                        }, {value: "HH:mm:ss", label: "HH:mm:ss"}, {
                            value: "yyyy/MM/dd HH:mm:ss",
                            label: "yyyy/MM/dd HH:mm:ss"
                        }, {value: "yyyy-MM-dd HH:mm:ss", label: "yyyy-MM-dd HH:mm:ss"}, {
                            value: "Timestamp",
                            label: "时间戳"
                        }],
                        statusList: [{value: 500, label: "失败"}, {value: 502, label: "失败(超时)"}, {
                            value: 200,
                            label: "成功"
                        }, {value: 0, label: "无"}]
                    }
                },
                created: function () {
                    this.fetchData(), this.getExecutor(), this.getJobIdList(), this.getJobProject(), this.getDataSourceList()
                },
                methods: {
                    handleClose: function (e) {
                        this.$confirm("确认关闭？").then((function (t) {
                            e()
                        })).catch((function (e) {
                        }))
                    }, getExecutor: function () {
                        var e = this;
                        i["c"]().then((function (t) {
                            var a = t.content;
                            e.executorList = a
                        }))
                    }, getJobIdList: function () {
                        var e = this;
                        i["d"]().then((function (t) {
                            var a = t.content;
                            e.jobIdList = a
                        }))
                    }, getJobProject: function () {
                        var e = this;
                        J["c"]().then((function (t) {
                            e.jobProjectList = t
                        }))
                    }, getDataSourceList: function () {
                        var e = this;
                        F["d"]().then((function (t) {
                            e.dataSourceList = t
                        }))
                    }, fetchData: function () {
                        var e = this;
                        this.listLoading = !0, this.projectIds && (this.listQuery.projectIds = this.projectIds.toString()), i["e"](this.listQuery).then((function (t) {
                            var a = t.content;
                            e.total = a.recordsTotal, e.list = a.data, e.listLoading = !1
                        }))
                    }, incStartTimeFormat: function (e) {
                    }, handleCreate: function () {
                        var e = this;
                        this.resetTemp(), this.dialogStatus = "create", this.dialogFormVisible = !0, this.$nextTick((function () {
                            e.$refs["dataForm"].clearValidate()
                        }))
                    }, createData: function () {
                        var e = this;
                        "BEAN" !== this.temp.glueType || Object(V["c"])(this.jobJson) ? this.$refs["dataForm"].validate((function (t) {
                            if (t) {
                                if (e.temp.childJobId) {
                                    var a = [];
                                    for (var l in e.temp.childJobId) a.push(e.temp.childJobId[l].id);
                                    e.temp.childJobId = a.toString()
                                }
                                e.temp.jobJson = e.jobJson, e.temp.glueSource = e.glueSource, e.partitionField && (e.temp.partitionInfo = e.partitionField + "," + e.timeOffset + "," + e.timeFormatType), i["b"](e.temp).then((function () {
                                    e.fetchData(), e.dialogFormVisible = !1, e.$notify({
                                        title: "Success",
                                        message: "Created Successfully",
                                        type: "success",
                                        duration: 2e3
                                    })
                                }))
                            }
                        })) : this.$notify({title: "Fail", message: "json格式错误", type: "error", duration: 2e3})
                    }, handlerUpdate: function (e) {
                        var t = this;
                        this.resetTemp(), this.temp = Object.assign({}, e), this.temp.jobJson && (this.jobJson = JSON.parse(this.temp.jobJson)), this.glueSource = this.temp.glueSource;
                        var a = [], l = [];
                        if (this.jobIdList) {
                            for (var r in this.jobIdList) this.jobIdList[r].id !== this.temp.id && l.push(this.jobIdList[r]);
                            this.JobIdList = l
                        }
                        if (this.temp.childJobId) {
                            var o = this.temp.childJobId.split(",");
                            for (var i in o) for (var n in this.jobIdList) this.jobIdList[n].id === parseInt(o[i]) && a.push(this.jobIdList[n]);
                            this.temp.childJobId = a
                        }
                        if (this.temp.partitionInfo) {
                            var s = this.temp.partitionInfo.split(",");
                            this.partitionField = s[0], this.timeOffset = s[1], this.timeFormatType = s[2]
                        }
                        this.dialogStatus = "update", this.dialogFormVisible = !0, this.$nextTick((function () {
                            t.$refs["dataForm"].clearValidate()
                        }))
                    }, updateData: function () {
                        var e = this;
                        this.temp.jobJson = "string" !== typeof this.jobJson ? JSON.stringify(this.jobJson) : this.jobJson, "BEAN" !== this.temp.glueType || Object(V["c"])(this.temp.jobJson) ? this.$refs["dataForm"].validate((function (t) {
                            if (t) {
                                if (e.temp.childJobId) {
                                    var a = [];
                                    for (var l in e.temp.childJobId) a.push(e.temp.childJobId[l].id);
                                    e.temp.childJobId = a.toString()
                                }
                                e.temp.glueSource = e.glueSource, e.partitionField && (e.temp.partitionInfo = e.partitionField + "," + e.timeOffset + "," + e.timeFormatType), i["k"](e.temp).then((function () {
                                    e.fetchData(), e.dialogFormVisible = !1, e.$notify({
                                        title: "Success",
                                        message: "Update Successfully",
                                        type: "success",
                                        duration: 2e3
                                    })
                                }))
                            }
                        })) : this.$notify({title: "Fail", message: "json格式错误", type: "error", duration: 2e3})
                    }, handlerDelete: function (e) {
                        var t = this;
                        this.$confirm("确定删除吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            i["g"](e.id).then((function (e) {
                                t.fetchData(), t.$notify({
                                    title: "Success",
                                    message: "Delete Successfully",
                                    type: "success",
                                    duration: 2e3
                                })
                            }))
                        }))
                    }, handlerExecute: function (e) {
                        var t = this;
                        this.$confirm("确定执行吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            var a = {};
                            a.jobId = e.id, a.executorParam = e.executorParam, i["j"](a).then((function (e) {
                                t.$notify({
                                    title: "Success",
                                    message: "Execute Successfully",
                                    type: "success",
                                    duration: 2e3
                                })
                            }))
                        }))
                    }, handlerViewLog: function (e) {
                        this.$router.push({path: "/datax/log/jobLog", query: {jobId: e.id}})
                    }, handlerStart: function (e) {
                        var t = this;
                        i["h"](e.id).then((function (e) {
                            t.$notify({title: "Success", message: "Start Successfully", type: "success", duration: 2e3})
                        }))
                    }, handlerStop: function (e) {
                        var t = this;
                        i["i"](e.id).then((function (e) {
                            t.$notify({title: "Success", message: "Start Successfully", type: "success", duration: 2e3})
                        }))
                    }, changeSwitch: function (e) {
                        1 === e.triggerStatus ? this.handlerStart(e) : this.handlerStop(e)
                    }, nextTriggerTime: function (e) {
                        var t = this;
                        i["f"](e.jobCron).then((function (e) {
                            var a = e.content;
                            t.triggerNextTimes = a.join("<br>")
                        }))
                    }, loadById: function (e) {
                        var t = this;
                        o["e"](e.jobGroup).then((function (e) {
                            t.registerNode = [];
                            var a = e.content;
                            t.registerNode.push(a)
                        }))
                    }
                }
            }, P = D, M = (a("9650"), Object(v["a"])(P, l, r, !1, null, null, null));
        t["default"] = M.exports
    }, 9650: function (e, t, a) {
        "use strict";
        a("ee9a")
    }, "9b7a": function (e, t, a) {
        "use strict";
        a("3b2e")
    }, ce55: function (e, t, a) {
    }, dfa2: function (e, t, a) {
        "use strict";
        a("6a15")
    }, ee9a: function (e, t, a) {
    }, fa7e: function (e, t, a) {
        "use strict";
        var l = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "json-editor"}, [a("textarea", {ref: "textarea"})])
        }, r = [], o = a("56b3"), i = a.n(o);
        a("0dd0"), a("a7be"), a("acdf"), a("f9d4"), a("8822"), a("d2de");
        a("ae67");
        var n = {
            name: "JsonEditor", props: ["value"], data: function () {
                return {jsonEditor: !1}
            }, watch: {
                value: function (e) {
                    var t = this.jsonEditor.getValue();
                    e !== t && this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
                }
            }, mounted: function () {
                var e = this;
                this.jsonEditor = i.a.fromTextArea(this.$refs.textarea, {
                    lineNumbers: !0,
                    mode: "application/json",
                    gutters: ["CodeMirror-lint-markers"],
                    theme: "rubyblue",
                    lint: !0
                }), this.jsonEditor.setValue(JSON.stringify(this.value, null, 2)), this.jsonEditor.on("change", (function (t) {
                    e.$emit("changed", t.getValue()), e.$emit("input", t.getValue())
                }))
            }, methods: {
                getValue: function () {
                    return this.jsonEditor.getValue()
                }
            }
        }, s = n, u = (a("9b7a"), a("2877")), c = Object(u["a"])(s, l, r, !1, null, "7b489788", null);
        t["a"] = c.exports
    }
}]);