import Align from './components/align'
import Backdrop from './components/backdrop'
import Button from './components/button'
import Breadcrumb from './components/breadcrumb'
import BreadcrumbItem from './components/breadcrumb-item'
import Cascader from './components/cascader'
import Checkbox from './components/checkbox'
import DatePicker from './components/date-picker'
import DateTimePicker from './components/datetime-picker'
import DateTimeRangePicker from './components/datetime-range-picker'
import DateRangePicker from './components/date-range-picker'
import Dialog from './components/dialog'
import Dropdown from './components/dropdown'
import Form from './components/form'
import FormGroup from './components/form-group'
import FormItem from './components/form-item'
import Input from './components/input'
import InputRange from './components/input-range'
import InputNumber from './components/input-number'
import Loading from './components/loading'
import Modal from './components/modal'
import Notice from './components/notice'
import Pagination from './components/pagination'
import Poptip from './components/poptip'
import Rate from './components/rate'
import { Radio, RadioGroup } from './components/radio'
import Scroll from './components/scroll'
import { Select, Option } from './components/select'
import Slider from './components/slider'
import Spin from './components/spin'
import Step from './components/step'
import Steps from './components/steps'
import Switch from './components/switch'
import { Tabs, TabPane } from './components/tabs'
import { Table, TableColumn, TableOperation } from './components/table'
import Tag from './components/tag'
import TimePicker from './components/time-picker'
import ToolTip from './components/tooltip'
import Tree from './components/tree'
import Uploader from './components/uploader'
import Validator from './components/validator'
import ValidatorErrors from './components/validator-errors'
import { Row, Col } from './components/layout'
import CollapseTransition from './components/collapse-transition'
import locale from './locale/index'
import ColorPicker from './components/color-picker'

const components = {
  Align,
  Backdrop,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Cascader,
  Checkbox,
  DatePicker,
  DateTimePicker,
  DateTimeRangePicker,
  DateRangePicker,
  Dropdown,
  Form,
  FormGroup,
  FormItem,
  Input,
  InputRange,
  InputNumber,
  Loading,
  Modal,
  Option,
  Pagination,
  Poptip,
  Radio,
  RadioGroup,
  Rate,
  Scroll,
  Select,
  Slider,
  Spin,
  Step,
  Steps,
  Switch,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  TableOperation,
  Tag,
  TimePicker,
  ToolTip,
  Tree,
  Uploader,
  Validator,
  ValidatorErrors,
  Row,
  Col,
  CollapseTransition,
  ColorPicker
}

function install (Vue, opts = {}) {
  if (install.installed) return

  for (const item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item])
    }
  }

  Vue.prototype.$confirm = Dialog.confirm
  Vue.prototype.$alert = Dialog.alert
  Vue.prototype.$Notice = Notice
  Vue.prototype.$Loading = Loading

  locale.use(opts.locale)
  locale.i18n(opts.i18n)
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  locale: locale.use,
  i18n: locale.i18n,
  ...components
}
